import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {pathsMug} from './path.ice-cream';
import {Mood} from '../../enums/mood.enum';
import {pathsPlanet} from '../planet/path.planet';
import {pathsFace} from '../../base/face/paths.face';

@Component({
  selector: 'lib-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IceCreamComponent implements OnInit {
  paths = pathsMug;
  @Input() mood =  Mood.HAPPY;
  @Input() color: string;
  @Input() size: string;
  moods =  Mood;
  pathsFace = pathsFace;
  className: any;
  constructor() { }

  ngOnInit() {
  }

}
