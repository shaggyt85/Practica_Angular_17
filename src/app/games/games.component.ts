import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Principe de persia',
      description: 'This is game 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Halo 3',
      description: 'This is game 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Resident evil 3',
      description: 'This is game 3',
      price: 29.99,
    }
  ]
}
