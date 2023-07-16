import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FlexItemService } from '@app/core/services/flex-item.service';
import { FlexService } from '@app/core/services/flex.service';
import { objectToCSS } from '@app/core/utilities/convertToCSSPropertiy';
import { CssCodePipe } from '@app/shared/pipes/cssCode.pipe';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { SuccessMessageComponent } from '@app/shared/components/success-message/success-message.component';

@Component({
  selector: 'app-flex-output',
  templateUrl: './flex-output.component.html',
  styleUrls: ['./flex-output.component.scss'],
  animations: [
    trigger('boxAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 0.8 }),
            style({ opacity: 0, offset: 1 }),
          ])
        ),
      ]),
      transition('* => *', [
        animate(
          '300ms',
          keyframes([
            style({ flex: '0 0 calc(33.33% - 20px)', offset: 0 }),
            style({ flex: '0 0 calc(25% - 20px)', offset: 0.2 }),
            style({ flex: '0 0 calc(25% - 20px)', offset: 0.8 }),
            style({ flex: '0 0 calc(33.33% - 20px)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FlexOutputComponent implements OnInit {
  @ViewChild('messageAnchor', { read: ViewContainerRef }) messageAnchor: ViewContainerRef;

  hello = 'text-center bg-blue-500 text-white rounded shadow my-6';
  copyCode(code: any) {
    const jsonString = objectToCSS(code);
    const el = document.createElement('textarea');
    el.value = jsonString;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.showSuccessMessage()
    // // Show copied message
    // const message = document.createElement('div');
    // message.classList?.add(
    //   'text-center',
    //   'bg-blue-500',
    //   'text-white',
    //   'rounded',
    //   'shadow',
    //   'my-6',
    //   'absolute',
    //   'top-4',
    //   'right-4',
    //   'p-4'
    // );
    // message.innerText = 'Copied!';
    // document.body.appendChild(message);
    // setTimeout(() => {
    //   document.body.removeChild(message);
    // }, 2000);
  }

  flexValue$: Observable<any>;
  cssObject: any;
  state$: Observable<any>;
  generatedCode: any;

  boxes: any[] = [];
  constructor(
    private flexService: FlexService,
    private toCSS: CssCodePipe,
    private flexItemService: FlexItemService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.flexValue$ = this.flexService.flexValue$;
    this.state$ = this.flexService.state$;
  }

  showSuccessMessage() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(SuccessMessageComponent);
    const componentRef: any = this.messageAnchor.createComponent(factory);
    componentRef.instance.message = 'Copied!';
    componentRef.instance.closeAfter(3000);
  }

  ngOnInit() {
    this.loadCSS();
    this.boxes = this.flexItemService.boxes;
  }

  addBox() {
    this.flexItemService.createBox();


  }

  removeBox(box: any) {
    this.flexItemService.removeBox(box);
    // this.boxes = this.boxes.filter((b) => b !== box);

  }

  loadCSS(): void {
    this.flexService.flexValue$.subscribe((cssProps) => {
      console.log(cssProps, 'CSS from Service');
      this.cssObject = cssProps;
    });
  }
}
