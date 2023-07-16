import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input({ required: true }) property: string;

  constructor() {}

  ngOnInit() {
    this.getCSSPropertyDetails();
  }

  getCSSPropertyDetails(): any {
    this.property;
  }
}
