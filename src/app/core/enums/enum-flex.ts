export enum EFlex {
  Flex = 'flex',
  InlineFlex = 'inline-flex',
}
export const displayFlexValues = ['flex', 'inline-flex'] as const;
export const flexDirectionValues = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
] as const;
export const flexWrapValues = ['nowrap', 'wrap', 'wrap-revarse'] as const;
export const alignItemsValues = [
  'stretch',
  'baseline',
  'center',
  'flex-start',
  'flex-end',
] as const;
export const justifyContentValues = [
  'flex-start',
  'center',
  'flex-end',
  'space-evenly',
  'space-between',
  'space-around',
] as const;

export const alignContentValues = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-evenly',
  'space-between',
  'space-around',
] as const;

export type TdisplayFlexValues = (typeof displayFlexValues)[number];
export type TFlexDirectionValues = (typeof flexDirectionValues)[number];
export type TFlexWrapValues = (typeof flexWrapValues)[number];
export type TAlignItemsValues = (typeof alignItemsValues)[number];
export type TJustifyContentValues = (typeof justifyContentValues)[number];
export type TAlignContentValues = (typeof alignContentValues)[number];

export enum EFlexDirection {
  Row = 'row',
  Column = 'column',
  RowRevarse = 'row-revarse',
  ColumnRevarse = 'column-revarse',
}

// export enum EFlexWrap {
//   Nowrap = 'nowrap',
//   Wrap = 'wrap',
//   WrapRevarse = 'wrap-revarse',
// }

type TBaseFlex =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-evenly'
  | 'space-between'
  | 'space-around';

export type TAlignItems = TBaseFlex | 'stretch' | 'baseline';

export type TAlignContent = TBaseFlex | 'stretch';

export type TJustifyContent = TBaseFlex;

type StretchOnly<T extends string> = T extends 'stretch' ? T : never;

type Alignment = 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';
type Justification =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-evenly'
  | 'space-between';

export type EAlignItems = Alignment;
export type EJustifyContent = Justification;
export type EAlignContent = StretchOnly<Alignment> | Justification;

// export enum EAlignItems {
//   Stretch = 'stretch',
//   Baseline = 'baseline',
//   Center = 'center',
//   FlexStart = 'flex-start',
//   FlexEnd = 'flex-end',
// }

// export enum EJustifyContent {
//   Center = 'center',
//   FlexStart = 'flex-start',
//   FlexEnd = 'flex-end',
//   SpaceAround = 'space-around',
//   SpaceEvenly = 'space-evenly',
//   SpaceBetween = 'space-between',
// }

// export enum EAlignContent {
//   Stretch = 'stretch',
//   Center = 'center',
//   FlexStart = 'flex-start',
//   FlexEnd = 'flex-end',
//   SpaceAround = 'space-around',
//   SpaceEvenly = 'space-evenly',
//   SpaceBetween = 'space-between',
// }
