import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.menuMobile();
    // this.menuDesktop();
  }
  menuMobile() {
    $('.icon-menu').click( () => {
      $('#icon-hamburger').toggleClass('icon-none');
      $('#icon-close').toggleClass('icon-none');
      $('.menu-mobile').slideToggle('slow');
    });

    $('.ancoras').click( () => {
      $('#icon-hamburger').toggleClass('icon-none');
      $('#icon-close').toggleClass('icon-none');
      $('.menu-mobile').slideToggle('slow');
    });
  }

  // menuDesktop() {
  //   $('.menu-resultados').click( () => {
  //     $('#seta-down').toggleClass('icon-none');
  //     $('#seta-up').toggleClass('icon-none');
  //     $('.menu-desktop-open').toggleClass('menu-open');
  //     $('.menu-desktop-open').slideToggle('slow');
  //   });
  // }
}
