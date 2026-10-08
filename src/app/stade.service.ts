import { Injectable } from '@angular/core';
import { Stade } from './stade.model';

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  stades: Stade[] = [];

  ajouterStade(stade: Stade) {
    this.stades.push(stade);
  }

  getStades(): Stade[] {
    return this.stades;
  }

  supprimerStade(idStade: number) {
    this.stades = this.stades.filter(s => s.idStade !== idStade);
  }

  getStade(idStade: number): Stade | undefined {
    return this.stades.find(s => s.idStade === idStade);
  }

  modifierStade(stadeModifie: Stade) {
    const index = this.stades.findIndex(
      s => s.idStade === stadeModifie.idStade
    );

    if (index !== -1) {
      this.stades[index] = stadeModifie;
    }
  }
}