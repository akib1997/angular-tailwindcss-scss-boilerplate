import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlexItemService {
  boxes: any[] = [
    { title: 'Box 1', color: 'red', deletable: false },
    { title: 'Box 2', color: 'fuchsia', deletable: true },
    { title: 'Box 3', color: 'blue', deletable: false },
    { title: 'Box 3', color: 'sky', deletable: false },
  ];

  createBox() {
    const box = {
      title: 'Box ' + (this.boxes.length + 1),
      color: this.getRandomColor(),
      deletable: true,
    };
    this.boxes.push(box);
    return box;
  }

  removeBox(box: any) {
    const index = this.boxes.indexOf(box);
    if (index !== -1) {
      this.boxes.splice(index, 1);
    }
  }

  private getRandomColor() {
    const colors = ['Cyan', 'Sky', 'Indigo', 'Violet', 'Fuchsia', 'Pink', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return `${colors[randomIndex]}`;
  }
}
