import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  imports: [],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
  @Input() title: string = '';
  @Input() imgSrc: string = '';
  @Input() link: string = '';
  @Input() img: string = '';

}
