import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Somosa','A delicious north Indian Somasa','https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg'),
    new Recipe('Chole Bature','A mouth watering original street taste','https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
