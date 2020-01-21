import {Component, OnInit} from '@angular/core';
import {AppliService} from '../services/appli.service';
import {Appli} from '../core/interfaces/appli';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: Appli[];
  divers: Appli[];
  constructor(private appliService: AppliService) {
    this.games = this.appliService.games;
    this.divers = this.appliService.divers;
  }

  ngOnInit() {
  }


}
