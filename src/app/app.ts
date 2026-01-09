import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { Products } from "./features/pages/products/products";
import { FilterSidePanel } from "./features/pages/filter-side-panel/filter-side-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Products, FilterSidePanel],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CommerceX');
}
