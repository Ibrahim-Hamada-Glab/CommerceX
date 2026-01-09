import { Component } from '@angular/core';
import { Products } from "../products/products";
import { FilterSidePanel } from "../filter-side-panel/filter-side-panel";

@Component({
  selector: 'app-home',
  imports: [Products, FilterSidePanel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
