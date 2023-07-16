import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'enumToArray'
  })
  export class EnumToArrayPipe implements PipeTransform {
    transform<T extends object>(enumeration: T): Array<keyof T> {
      return Object.keys(enumeration) as Array<keyof T>;
    }
  }
