import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { ColorsService } from '../colors.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, TitleCasePipe, NgComponentOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(
    public colors: ColorsService,
    public categories: CategoriesService
  ) {}
}
