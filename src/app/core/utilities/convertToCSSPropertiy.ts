export function convertToCSSProperty(key: string) {
  return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

interface ICSSProperties {
  [key: string]: string;
}

 export function objectToCSS(styles: ICSSProperties): string {
  let css = '';

  for (const property in styles) {
    if (styles.hasOwnProperty(property)) {
      const kebabCaseProperty = property.replace(
        /[A-Z]/g,
        (m) => `-${m.toLowerCase()}`
      );
      const value = styles[property];
      css += `${kebabCaseProperty}: ${value};\n`;
    }
  }

  return css;
}
