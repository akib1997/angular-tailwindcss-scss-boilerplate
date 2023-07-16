import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CSSPropertyDetailsService {
  constructor() {}
}

const data = {
  flexbox: {
    display: {
      value: 'flex',
      details:
        'The flex container becomes flexible by setting the display property to flex',
    },
  },
};
