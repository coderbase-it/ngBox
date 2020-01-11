import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LobbyComponent} from './components/lobby/lobby.component';
import {GameComponent} from './components/game/game.component';


const routes: Routes = [
  {path: '', redirectTo: 'lobby', pathMatch: 'full'},
  {path: 'lobby', component: LobbyComponent},
  {path: 'game', component: GameComponent},
  {path: 'bj2', loadChildren: () => import('./bj2/bj2.module').then((m) => m.Bj2Module)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackJackEngineRoutingModule { }
