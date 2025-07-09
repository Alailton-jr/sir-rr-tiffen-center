import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { MenuComponent } from './components/menu/menu';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, About, MenuComponent, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'sir-rr-tiffen-center';
}
