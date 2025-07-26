import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { ColorsService } from '../../shared/services/colors.service';
import { CategoriesService } from '../../shared/services/categories-service/categories.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TitleCasePipe, NgComponentOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    public colors: ColorsService,
    public categories: CategoriesService
  ) {}
}
