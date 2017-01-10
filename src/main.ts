import {createDependencyInjectionContainer} from './bootstrapper';
import {createDropdownComponent} from './dropdown-component'

let container = createDependencyInjectionContainer();

let dropdownComponent = container.createObject(createDropdownComponent)({allowEmpty: false});
console.log(dropdownComponent.renderMaquette());