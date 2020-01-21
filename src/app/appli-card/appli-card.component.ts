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

  color = 'primary';

  constructor() {
    // tslint:disable-next-line:no-shadowed-variable

  }

  ngOnInit() {
  }

}
