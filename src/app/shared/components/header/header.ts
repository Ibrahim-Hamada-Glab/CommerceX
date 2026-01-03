import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() cartCount: number = 0;
  searchQuery: string = '';

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // TODO: Implement search navigation or emit search event
    }
  }
}
