import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaIcones = [
    {
      src: '../../assets/img/HTML.png'
    },
    {
      src: '../../assets/img/CSS.png'
    },
    {
      src: '../../assets/img/Sass.png'
    },
    {
      src: '../../assets/img/AngularJS.png'
    },
    {
      src: '../../assets/img/JavaScript.png'
    },
    {
      src: '../../assets/img/TypeScript.png'
    },
    {
      src: '../../assets/img/NodeJs.png'
    },
    {
      src: '../../assets/img/Bootstrap.png'
    },
    {
      src: '../../assets/img/Jquery.png'
    },
    {
      src: '../../assets/img/AzureDevops.png'
    },
    {
      src: '../../assets/img/Figma.png'
    },
    {
      src: '../../assets/img/Git.png'
    },
    {
      src: '../../assets/img/Scrum.png'
    },
    {
      src: '../../assets/img/PowerBi.png'
    },
    {
      src: '../../assets/img/Oracle.png'
    },
    {
      src: '../../assets/img/VBA.png'
    },
    {
      src: '../../assets/img/Wordpress.png'
    },
    {
      src: '../../assets/img/Java.png'
    }
  ]

}
