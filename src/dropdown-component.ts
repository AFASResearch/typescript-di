import {Projector, Component} from 'maquette';
import {OverlayService} from './overlay-service';

export interface DropdownComponentConfig {
  allowEmpty: boolean;
}

export let createDropdownComponent = (dependencies: {projector: Projector, overlayService: OverlayService}) => (config: DropdownComponentConfig): Component => {
  let overlay = dependencies.overlayService.createOverlay();
  return {
    renderMaquette: () => undefined
  };
}
