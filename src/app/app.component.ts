import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Noticias', url: '/folder/Outbox', icon: 'newspaper' },
    { title: 'Contatos', url: '/folder/Favorites', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'information' },
  ];
  constructor() {}
}
