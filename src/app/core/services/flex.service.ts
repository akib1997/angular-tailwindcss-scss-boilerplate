import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  alignContentValues,
  alignItemsValues,
  displayFlexValues,
  flexDirectionValues,
  flexWrapValues,
  justifyContentValues,
} from '../enums/enum-flex';
import { convertToCSSProperty } from '../utilities/convertToCSSPropertiy';
import { IFlex } from '@app/models/flex.model';

@Injectable({ providedIn: 'root' })
export class FlexService {
  initialValues: IFlex = generateInitialValues(initialValuesArray);
  private flexValue = new BehaviorSubject(this.initialValues);


  public flexValue$ = this.flexValue.asObservable();

  private stateSubject: BehaviorSubject<any>;
  public state$: Observable<any>;

  constructor() {
    this.stateSubject = new BehaviorSubject<any>(null);
    this.state$ = this.stateSubject.asObservable();
  }

  setFlexValue(data: any): void {
    const cssObj: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const cssKey = convertToCSSProperty(key);
        cssObj[cssKey] = data[key];
      }
    }
    return this.flexValue.next(cssObj);
  }
}

function generateInitialValues(valuesArray: any[]): IFlex {
  return {
    display: valuesArray[0],
    flexDirection: valuesArray[1],
    flexWrap: valuesArray[2],
    alignItems: valuesArray[3],
    justifyContent: valuesArray[4],
    alignContent: valuesArray[5],
  };
}

const initialValuesArray = [
  displayFlexValues[0],
  flexDirectionValues[0],
  flexWrapValues[0],
  alignItemsValues[0],
  justifyContentValues[0],
  alignContentValues[0],
];
