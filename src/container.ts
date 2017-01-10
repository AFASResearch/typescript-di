import {Projector} from 'maquette';
import {OverlayService} from './overlay-service';

export interface AllDependencies {
  container: DependencyInjectionContainer;
  projector: Projector;
  overlayService: OverlayService;
}

export interface DependencyInjectionContainer {
  createObject<T>(createFunction: (dependencies: AllDependencies) => T) : T;
  // Compiler does not check A1 here: createObject<T, A1>(createFunction: (dependencies: AllDependencies, arg1: A1) => T, A1) : T;
}