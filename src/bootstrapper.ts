import {Projector, Component, createProjector} from 'maquette';
import {OverlayService, createOverlayService} from './overlay-service';
import {AllDependencies, DependencyInjectionContainer} from './container';

export let createDependencyInjectionContainer = (): DependencyInjectionContainer => {
  let allDependencies = {  } as AllDependencies;
  let container: DependencyInjectionContainer = {
    createObject: (createFunction, ...args) => {
      return createFunction(allDependencies, ...args);
    }
  }
  allDependencies.container = container;
  allDependencies.projector = createProjector({});
  allDependencies.overlayService = container.createObject(createOverlayService);
  return container;
}

