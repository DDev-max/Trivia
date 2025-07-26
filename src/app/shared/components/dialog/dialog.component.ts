import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  @Input({ required: true }) isOpen = false;
  @Input({required: true}) text = ''

}
