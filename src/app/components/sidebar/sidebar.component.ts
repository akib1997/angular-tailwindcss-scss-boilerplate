import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlexService } from '@app/core/services/flex.service';
import { IFlex } from '@app/models/flex.model';
import { EFlex, displayFlexValues, flexDirectionValues } from '@enums/enum-flex';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private flexService: FlexService
  ) { }

  ngOnInit() {
  }




}



// interface IFlexForm {
//   flex: FormControl<IFlex['flex']>;
//   flexDirection: FormControl<IFlex['flexDirection']>;
//   flexWrap: FormControl<IFlex['flexWrap']>;
//   justifyContent: FormControl<IFlex['justifyContent']>;
//   alignItems: FormControl<IFlex['alignItems']>;
//   alignContent: FormControl<IFlex['alignContent']>;
// }
