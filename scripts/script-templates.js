const _ = require('lodash');

const AUTOGENERATED_FILE = `
/*
* Don't delete this file, it's autogenerated by the ACL icons build script
*/`;

exports.getTemplate = (iconSelector, iconTemplate, iconComponentName, svgClass) => {
  return `${AUTOGENERATED_FILE}\nimport { Component, Input } from '@angular/core';
@Component({
  selector: '${iconSelector}',
  // tslint:disable-next-line:max-line-length
  template: '${iconTemplate}',
  styles: []
})
export class ${iconComponentName} {

  @Input() svgClass = '';
  commonClass = '${svgClass}';
}\n`;
};

exports.getModuleTemplate = (moduleName, componentObjectsList) => {
  const joinedComponentNames = _.map(componentObjectsList, (componentObject) => {
    return componentObject.name;
  }).join(', ');
  const componentImportsStatement = createImportsFromComponents(componentObjectsList).join('\n');
  const moduleImports = [`import { NgModule } from '@angular/core';`,`import { CommonModule } from '@angular/common';`].join('\n');
  return `${AUTOGENERATED_FILE}\n${moduleImports}\n
${componentImportsStatement}

@NgModule({
  imports: [ CommonModule ],
  // tslint:disable-next-line:max-line-length
  declarations: [${joinedComponentNames}],
  // tslint:disable-next-line:max-line-length
  exports: [${joinedComponentNames}]
})
export class ${moduleName} { }
`;
};

exports.getCommonModuleTemplate = (basePath, modules) => {
  const joinedModuleNames = _.map(modules, (module) => {
    return module.name;
  }).join(', ');
  const modulesImportStatement = createImportsForCommonModule(modules, basePath).join('\n');
  return `${AUTOGENERATED_FILE}\nimport { NgModule } from '@angular/core';
${modulesImportStatement}

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [${joinedModuleNames}],
  declarations: [],
  // tslint:disable-next-line:max-line-length
  exports: [${joinedModuleNames}]
})
export class IconCommonModule { }
`;
};

function createImportsFromComponents(componentObjectsList) {
  return _.map(componentObjectsList, (componentObject) => {
    return `import { ${componentObject.name} } from './${componentObject.fileName.replace('\.ts', '')}';`;
  });
}

function createImportsForCommonModule(modules, basePath) {
  return _.map(modules, (module) => {
    const relativePath = module.path.substring(basePath.length + 1);
    return `import { ${module.name} } from './${relativePath + '/' + module.fileName.replace('\.ts', '')}';`;
  });
}

exports.getPublicApiIconsFileTemplate = (modules, pathToExclude) => {
  const publicApiExports = [AUTOGENERATED_FILE ];
  _.forEach(modules, (module, moduleKey) => {
    publicApiExports.push('// tslint:disable-next-line:max-line-length');
    publicApiExports.push(`export * from '${module.path.replace(pathToExclude, './')}/${module.fileName.replace('.ts', '')}';`);
    _.forEach(module.components, (component) => {
      publicApiExports.push('// tslint:disable-next-line:max-line-length');
      publicApiExports.push(`export * from '${module.path.replace(pathToExclude, './')}/${component.fileName.replace('.ts', '')}';`);
    });
  });
  return publicApiExports.push(`export * from './icon-common.module\n';`).join('\n');

}

function getIconsArray(createdComponents, pathToExclude) {
  const objectEntries = [];
  _.forEach(createdComponents, (component) => {
    const path = _.map(component.sourceFileName.replace(pathToExclude, '').split('/').slice(1, -1), (tag) => {
      return ` '${tag}'`;
    });
    objectEntries.push(
      `  {
    'selector': '${component.selector}',
    'name': '${component.name}',
    'tags': [${path}]
  }`);
  });
  return objectEntries;
}

exports.getComponentMappingTemplate = (createdComponents, pathToExclude) => {
  const template = `${AUTOGENERATED_FILE}\nexport class SBBComponentsMapping {
    static icons = [
      ${getIconsArray(createdComponents, pathToExclude).join(',\n')}
  ];
  }\n`;
  return template;

}

exports.getComponentsExportMapTemplate = (createdComponents) => {
  const importStatement = _.map(createdComponents, (component) => {
    return component.name;
  }).join(',\n');
  const mapStatement = _.map(createdComponents, (component) => {
    return `'${component.name}': ${component.name}`;
  }).join(',\n')

  return `${AUTOGENERATED_FILE}\nimport {
    ${importStatement}
  } from 'sbb-angular';\n
  const map = {
    ${mapStatement}
  };\n
  export { map };\n`;

}
