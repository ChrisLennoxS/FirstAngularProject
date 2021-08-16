import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Full of carbs and wonderful',
      'https://c8.alamy.com/comp/2AA5EP7/traditional-vintage-cooked-spaghetti-pasta-in-tomato-sauce-and-herbs-with-wooden-spoon-in-rustic-frying-pan-2AA5EP7.jpg'
    ),
    new Recipe(
      'Spaghetti',
      'Full of carbs and wonderful',
      'https://c8.alamy.com/comp/2AA5EP7/traditional-vintage-cooked-spaghetti-pasta-in-tomato-sauce-and-herbs-with-wooden-spoon-in-rustic-frying-pan-2AA5EP7.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
