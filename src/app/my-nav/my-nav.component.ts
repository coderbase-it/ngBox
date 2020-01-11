import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {from, Observable, of} from 'rxjs';
import {filter, map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {Route, Router} from '@angular/router';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public links$: Observable<Route>;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private menuService: MenuService) {
    this.links$ =  this.menuService.refresh$.pipe(
      switchMap(() => {
        return of(this.router.config).pipe(
          map(( config) => config.filter( (r: any) => r.data && r.data.nav) ),
          tap(console.log)
        );
      })

    );


  }

}
