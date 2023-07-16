import { Pipe, PipeTransform } from '@angular/core';
import { convertToCSSProperty } from '@app/core/utilities/convertToCSSPropertiy';

@Pipe({
  name: 'cssCode',
})
export class CssCodePipe implements PipeTransform {
  transform(code: string): string {
    // Remove curly braces and quotes
    console.log(code, 'd')
    const cleanedCode = code.replace(/[{}"]/g, '');

    // Split the properties into an array
    const properties = cleanedCode.split(',');

    // Format each property with line breaks
    const formattedProperties = properties.map((property) => {
      const [key, value] = property.split(':');
      const convertToCSS = convertToCSSProperty(key)
      return `${convertToCSS.trim()}: ${value.trim()};\n`;
    });

    // Join the formatted properties into a single string
    const formattedCode = formattedProperties.join('');

    return formattedCode;
  }
}
