import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EnumToArrayPipe } from "@shared/pipes/enumToArray.pipe";
import { ResizableDirective } from "./directives/resizable.directive";
import { CssCodePipe } from "./pipes/cssCode.pipe";

@NgModule({
  imports: [CommonModule,],
  declarations: [EnumToArrayPipe, ResizableDirective, CssCodePipe],
  exports: [EnumToArrayPipe, ResizableDirective, CssCodePipe]
})

export class SharedModule{}
