import { Component, OnInit } from '@angular/core';
import { IMGS } from 'src/constants/imagens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fotoPerfil = IMGS.FOTO_PERFIL;

  constructor() { }

  ngOnInit(): void {
  }

}
