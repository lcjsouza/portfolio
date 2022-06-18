import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaContatos = [
    {
      img: "../../assets/img/logo-linkedln.png",
      texto: "linkedin.com/in/lcj-souza",
      link: "https://www.linkedin.com/in/lcj-souza"
    },
    {
      img: "../../assets/img/logo-whatsapp.png",
      texto: "(21) 9.7395-5445",
      link: "http://api.whatsapp.com/send?1=pt_BR&phone=5521973955445"
    },
    {
      img: "../../assets/img/logo-yahoo.png",
      texto: "lcj_souza@yahoo.com.br",
      link: "mailto:lcj_souza@yahoo.com.br"
    },
    {
      img: "../../assets/img/logo-git.png",
      texto: "github.com/lcjsouza",
      link: "https://github.com/lcjsouza"
    },
  ]

}
