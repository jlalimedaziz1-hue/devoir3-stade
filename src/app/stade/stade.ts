import { Component } from '@angular/core';
import { StadeService } from '../stade.service';
import { Stade } from '../stade.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stade',
  imports: [RouterLink],
  templateUrl: './stade.html',
  styleUrl: './stade.css'
})
export class StadeComponent {

  stades: Stade[] = [];

  constructor(private stadeService: StadeService) {
    this.stades = this.stadeService.getStades();
  }

  supprimerStade(idStade: number) {
    this.stadeService.supprimerStade(idStade);
    this.stades = this.stadeService.getStades();
  }
}