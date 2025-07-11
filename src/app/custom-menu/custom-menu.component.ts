import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-menu',
  imports: [RouterLink],
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.css',
})
export class CustomMenuComponent {
  triviaCreated = Object.keys(localStorage);
}
