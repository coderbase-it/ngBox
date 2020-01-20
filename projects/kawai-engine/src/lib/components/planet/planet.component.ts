import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Kawai} from '../../base/kawai';
import {pathsPlanet} from './path.planet';
import {Mood} from '../../enums/mood.enum';
import {pathsFace} from '../../base/face/paths.face';

@Component({
  selector: 'lib-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetComponent extends Kawai implements OnInit  {
  paths = pathsPlanet;
  @Input() mood =  Mood.HAPPY;
  moods =  Mood;
  pathsFace = pathsFace;
  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.color);
  }

}
