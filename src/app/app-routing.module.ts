import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerUpdateComponent } from './player-update/player-update.component';

const routes: Routes = [
  { path: 'players', component: PlayerListComponent },  
  { path: 'players/create', component: PlayerCreateComponent },  
  { path: 'players/:id', component: PlayerUpdateComponent },
  { path: '', redirectTo: 'players', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
