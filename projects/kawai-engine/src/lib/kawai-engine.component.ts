import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Mood} from './enums/mood.enum';

@Component({
  selector: 'lib-kawai-engine',
  template: `
    <h1>Planet happy</h1>
      <lib-planet [color]="color" [mood]="mood" [size]="size" ></lib-planet>
        <button (click)="changeMood()"> change mood</button>
    <lib-ice-cream [color]="color" [mood]="mood" [size]="size" ></lib-ice-cream>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KawaiEngineComponent implements OnInit {
  mood = Mood.HAPPY;
  public size: number;
  public color: string;
  constructor() { }

  ngOnInit() {
    this.size =  190;
    this.color =  '#FCCB7E';
  }

  changeMood() {
    this.mood = this.randomEnumValue(Mood);
    console.log(this.mood);
  }
  randomEnumValue = (enumeration) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }
}
