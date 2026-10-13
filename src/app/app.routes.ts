
import { Routes } from '@angular/router';
import { StadeComponent } from './stade/stade';
import { AddStade } from './add-stade/add-stade';
import { ModifierStade } from './modifier-stade/modifier-stade';

export const routes: Routes = [
  { path: '', redirectTo: 'stade', pathMatch: 'full' },
  { path: 'stade', component: StadeComponent },
  { path: 'add-stade', component: AddStade },
  { path: 'modifier-stade/:id', component: ModifierStade },
  { path: '**', redirectTo: 'stade' }
];
