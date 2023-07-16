import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css'],
  standalone: true
})
export class SuccessMessageComponent implements OnInit {

  @Input() message: string;

  constructor() {}

  ngOnInit() {}

  closeAfter(duration: number) {
    setTimeout(() => {
      this.destroyComponent();
    }, duration);
  }

  ngOnDestroy() {
    this.destroyComponent();
  }

  private destroyComponent() {
    const componentElement = document.querySelector('app-success-message');
    if (componentElement) {
      componentElement.remove();
    }
  }

}
