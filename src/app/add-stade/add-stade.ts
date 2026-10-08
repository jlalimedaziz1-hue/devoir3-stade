import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StadeService } from '../stade.service';
import { Stade } from '../stade.model';

@Component({
  selector: 'app-add-stade',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-stade.html',
  styleUrl: './add-stade.css'
})
export class AddStade {

  stade: Stade = {
    idStade: 0,
    nomStade: '',
    ville: '',
    capacite: 0,
    dateCreation: ''
  };

  constructor(
    private stadeService: StadeService,
    private router: Router
  ) {}

  ajouterStade() {
    this.stadeService.ajouterStade(this.stade);
    this.router.navigate(['/stade']);
  }
}