import {
  TAlignContent,
  TAlignItems,
  TAlignItemsValues,
  TFlexDirectionValues,
  TFlexWrapValues,
  TJustifyContent,
  TJustifyContentValues,
  TdisplayFlexValues,
} from '@app/core/enums/enum-flex';

export interface IFlex {
  display: TdisplayFlexValues;
  flexDirection: TFlexDirectionValues;
  flexWrap: TFlexWrapValues;
  justifyContent: TJustifyContentValues;
  alignItems: TAlignItemsValues;
  alignContent: TAlignContent;
}
