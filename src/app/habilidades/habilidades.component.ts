import { IMGS } from 'src/constants/imagens';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  imgHtml = IMGS.IMG_HTML;
  imgCss = IMGS.IMG_CSS;
  imgSass = IMGS.IMG_SASS;
  imgAngular = IMGS.IMG_ANGULAR;
  imgJavaScript = IMGS.IMG_JS;
  imgTypeScript = IMGS.IMG_TS;
  imgNode = IMGS.IMG_NODE;
  imgBootstrap = IMGS.IMG_BOOTSTRAP;
  imgJquery = IMGS.IMG_JQUERY;
  imgDevops = IMGS.IMG_AZURE;
  imgFigma = IMGS.IMG_FIGMA;
  imgGit = IMGS.IMG_GIT;
  imgScrum = IMGS.IMG_SCRUM;
  imgBi = IMGS.IMG_POWERBI;
  imgOracle = IMGS.IMG_ORACLE;
  imgVba = IMGS.IMG_VBA;
  imgWordpress = IMGS.IMG_WORDPRESS;
  imgJava = IMGS.IMG_JAVA;

  constructor() { }

  ngOnInit(): void {
  }

  listaIcones = [
    {
      src: this.imgHtml
    },
    {
      src: this.imgCss
    },
    {
      src: this.imgSass
    },
    {
      src: this.imgAngular
    },
    {
      src: this.imgJavaScript
    },
    {
      src: this.imgTypeScript
    },
    {
      src: this.imgNode
    },
    {
      src: this.imgBootstrap
    },
    {
      src: this.imgJquery
    },
    {
      src: this.imgDevops
    },
    {
      src: this.imgFigma
    },
    {
      src: this.imgGit
    },
    {
      src: this.imgScrum
    },
    {
      src: this.imgBi
    },
    {
      src: this.imgOracle
    },
    {
      src: this.imgVba
    },
    {
      src: this.imgWordpress
    },
    {
      src: this.imgJava
    }
  ]

}
