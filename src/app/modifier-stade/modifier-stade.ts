import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StadeService } from '../stade.service';
import { Stade } from '../stade.model';

@Component({
  selector: 'app-modifier-stade',
  imports: [FormsModule, RouterLink],
  templateUrl: './modifier-stade.html',
  styleUrl: './modifier-stade.css'
})
export class ModifierStade {

  stade: Stade = {
    idStade: 0,
    nomStade: '',
    ville: '',
    capacite: 0,
    dateCreation: ''
  };

  constructor(
    private stadeService: StadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const stadeTrouve = this.stadeService.getStade(id);

    if (stadeTrouve) {
      this.stade = { ...stadeTrouve };
    }
  }

  modifierStade() {
    this.stadeService.modifierStade(this.stade);
    this.router.navigate(['/stade']);
  }
}