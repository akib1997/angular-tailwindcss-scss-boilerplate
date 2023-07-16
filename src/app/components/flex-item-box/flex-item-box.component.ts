import { Component, Input, OnInit } from '@angular/core';
import { FlexItemService } from '@app/core/services/flex-item.service';
import { FlexService } from '@app/core/services/flex.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'flex-item-box',
  templateUrl: './flex-item-box.component.html',
  styleUrls: ['./flex-item-box.component.scss'],
  animations: [
    trigger('boxAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 0.5 }),
          style({ opacity: 0, width: '0', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class FlexItemBoxComponent implements OnInit {
  // @Input({required: true}) box: any;
  @Input() box: any;
  @Input() deletable: boolean = true;
  constructor(private flexService: FlexService, private flexItemService: FlexItemService) {}

  ngOnInit() {
    // console.log(this.box, 'box')
  }

  onDeleteClick($event: any): void {
    // console.log('d', $event)
    this.flexItemService.removeBox($event);
  }
}
