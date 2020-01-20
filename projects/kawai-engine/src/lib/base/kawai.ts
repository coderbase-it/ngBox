import {Input} from '@angular/core';

export class Kawai {
  @Input() size: number;
  @Input() color: string;
  @Input() mood: string;
  @Input() className:string;

}
