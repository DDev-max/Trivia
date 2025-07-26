import { Component, input } from '@angular/core';

export interface LinkOption {
  txt: string;
  href: string;
}

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  isOpen = input.required<boolean>();
  text = input.required<string>();
}
