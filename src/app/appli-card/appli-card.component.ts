import {Component, Input, OnInit} from '@angular/core';
import {LoadChildrenCallback, Router} from '@angular/router';
import {MenuService} from '../my-nav/menu.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-appli-card',
  templateUrl: './appli-card.component.html',
  styleUrls: ['./appli-card.component.scss']
})
export class AppliCardComponent implements OnInit {
  @Input() description: string;
  @Input() image: string;
  @Input() subtitle: string;
  @Input() title: string;
  @Input() url: string;
  @Input() modulePath: LoadChildrenCallback;

  @Input() path: string;
  color = 'primary';
  checked = false;
  disabled = false;

  constructor(
              private router: Router,
              private menuService: MenuService) {
    // tslint:disable-next-line:no-shadowed-variable

  }

  ngOnInit() {
    const c = this.router.config.filter((c) => c.path === this.path)
    console.log(this.router.config)
    this.checked = c.length > 0;
  }

  activate($event) {
    console.log($event);
    // active l'application dans les plugins de l'application principales
    if ( $event.checked) {
      console.log(this.modulePath)
      this.router.resetConfig([

        {
          path: this.path,
          data: {nav: true, title : this.title, url : this.url},
          loadChildren: this.modulePath

        },
        ...this.router.config
      ]);
    } else {
      const conf = this.router.config.filter( (c) => c.path !== this.path || c.data && c.data.url !== this.url);
      this.router.resetConfig(conf);

    }


    this.menuService.refresh();

  }
}
