import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Mood} from '../../enums/mood.enum';
import {pathsFace} from './paths.face';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[lib-face]',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaceComponent implements OnInit {
  @Input() mood: Mood.BLISSFUL;
  moods =  Mood;
  pathsFace = pathsFace;
  constructor() { }

  ngOnInit() {
  }

}
