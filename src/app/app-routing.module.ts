import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [

  {path: 'poker', loadChildren: () => import('./loaders/poker-loader/poker-loader.module').then((m) => m.PokerLoaderModule)},
  {path: 'snakegame', loadChildren: () => import('./loaders/snakegame-loader/snakegame-loader.module').then((m) => m.SnakegameLoaderModule)},
  {path: 'unicornland', loadChildren: () => import('./loaders/unicornland-loader/unicornland-loader.module').then((m) => m.UnicornlandLoaderModule)},
  {path: 'movie', loadChildren: () => import('./loaders/movie-loader/movie-loader.module').then((m) => m.MovieLoaderModule)},
  {path: 'crm', loadChildren: () => import('./loaders/crm-loader/crm-loader.module').then((m) => m.CrmLoaderModule)},
  {path: 'element', loadChildren: () => import('./loaders/element-loader/element-loader.module').then((m) => m.ElementLoaderModule)},
  // tslint:disable-next-line:max-line-length
  {path: 'todo-ngxs', loadChildren: () => import('./loaders/todo-ngxs-loader/todo-ngxs-loader.module').then((m) => m.TodoNgxsLoaderModule)},
  {
    path: 'black-jack',
    loadChildren: () => import('./loaders/black-jack-loader/black-jack-loader.module').then((m) => m.BlackJackLoaderModule)
  },
  {
    path: 'kawai',
    loadChildren: () => import('./loaders/kawai-loader/kawai-loader.module').then((m) => m.KawaiLoaderModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./loaders/crm-loader/crm-loader.module').then((m) => m.CrmLoaderModule)
  },
  {
    path: 'element',
    loadChildren: () => import('./loaders/element-loader/element-loader.module').then((m) => m.ElementLoaderModule)
  },
  {
    path: 'todo-ngxs',
    loadChildren: () => import('./loaders/todo-ngxs-loader/todo-ngxs-loader.module').then((m) => m.TodoNgxsLoaderModule)
  },
  {
    path: 'ngrx-pizza',
    loadChildren: () => import('./loaders/ngrx-pizza-loader/ngrx-pizza-loader.module').then((m) => m.NgrxPizzaLoaderModule)
  },
  {
    path: 'ngxs-pizza',
    loadChildren: () => import('./loaders/ngxs-pizza-loader/ngxs-pizza-loader.module').then((m) => m.NgxsPizzaLoaderModule)
  },
  {
    path: 'todo-ngxs',
    loadChildren: () => import('./loaders/todo-ngxs-loader/todo-ngxs-loader.module').then((m) => m.TodoNgxsLoaderModule)
  },

  {
    path: 'movie',
    loadChildren: () => import('./loaders/movie-loader/movie-loader.module').then((m) => m.MovieLoaderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
