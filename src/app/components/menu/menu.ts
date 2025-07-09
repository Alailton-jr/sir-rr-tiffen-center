import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})

export class MenuComponent {
  menuItems = [
    {
      name: 'Chapathi',
      image: 'https://rrtiffencenter.my.canva.site/_assets/media/65f98c8323f213e00e9605f3fa0cb39d.png'
    },
    {
      name: 'Idli',
      image: 'https://rrtiffencenter.my.canva.site/_assets/media/b4bfb9813beadcc87306889e04c314fa.jpg'
    },
    {
      name: 'Dosai',
      image: 'https://rrtiffencenter.my.canva.site/_assets/media/29b2cd23f1c5fbad8a1c4d7ae20743c7.jpg'
    }
  ];
}