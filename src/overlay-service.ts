import {Projector} from 'maquette';

export interface OverlayService {
  createOverlay(): number;
  showOverlay(overlay: number);
}

export let createOverlayService = (dependencies: {projector: Projector}): OverlayService => {
  return {
    createOverlay: () => 5,
    showOverlay:(overlay: number) => {}
  }
}
