import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlexService } from '@app/core/services/flex.service';
import { IFlex } from '@app/models/flex.model';
import { EFlex, alignContentValues, alignItemsValues, displayFlexValues, flexDirectionValues, flexWrapValues, justifyContentValues } from '@enums/enum-flex';

@Component({
  selector: 'flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss']
})
export class FlexFormComponent implements OnInit {

  flexValues = displayFlexValues;
  flexDirectionValues = flexDirectionValues;
  flexWrapValues = flexWrapValues;
  alignItemsValues = alignItemsValues;
  justifyContentValues = justifyContentValues;
  alignContentValues = alignContentValues;

  form: FormGroup<TFlexForm>;
  constructor(
    private fb: FormBuilder,
    private flexService: FlexService
  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  updateFlexValue(data: any): void {
    this.flexService.setFlexValue(data)
  }

  initializeForm(): void {
    this.form = this.fb.group<TFlexForm>({
      display: this.fb.control(this.flexService.initialValues.display, [Validators.required]),
      flexDirection: this.fb.control(this.flexService.initialValues.flexDirection, [Validators.required]),
      flexWrap: this.fb.control(this.flexService.initialValues.flexWrap, [Validators.required]),
      justifyContent: this.fb.control(this.flexService.initialValues.justifyContent, [Validators.required]),
      alignItems: this.fb.control(this.flexService.initialValues.alignItems, [Validators.required]),
      alignContent: this.fb.control(this.flexService.initialValues.alignContent, [Validators.required]),
    });

    this.form.valueChanges.subscribe(data => {
      this.updateFlexValue(data);
      // this.updateState(data);
    })
  }
  // updateState(newState: any): void {
  //   this.flexService.setState(newState);
  // }

}

type TFlexForm = {
  [K in keyof IFlex]: FormControl<IFlex[K] | null>;
};
