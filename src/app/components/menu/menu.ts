import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})

export class MenuComponent {
  // Get a reference to the gallery element in the template
  @ViewChild('gallery') gallery!: ElementRef;

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
    },
    // Add more items to test scrolling
    {
      name: 'Vada',
      image: 'https://rrtiffencenter.my.canva.site/_assets/media/236793a3a0f0f2787dd6f9387036d102.png'
    },
    {
      name: 'Poori',
      image: 'https://rrtiffencenter.my.canva.site/_assets/media/65f98c8323f213e00e9605f3fa0cb39d.png'
    }
  ];

  // Function to scroll the gallery to the left
  scrollLeft(): void {
    this.gallery.nativeElement.scrollBy({
      left: -300, // The width of one item + gap
      behavior: 'smooth'
    });
  }

  // Function to scroll the gallery to the right
  scrollRight(): void {
    this.gallery.nativeElement.scrollBy({
      left: 300, // The width of one item + gap
      behavior: 'smooth'
    });
  }
}