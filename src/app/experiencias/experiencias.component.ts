import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.verAtividade();
    
  }

  // verAtividade() {
  //   $('.link-atividade').click( function()  {
  //     $('.info-empresa').toggleClass('display-none');
  //     // $('#seta-up').toggleClass('icon-none');
  //     // $('.menu-desktop-open').toggleClass('menu-open');
  //     $('.atividades-desktop').slideToggle('slow');
  //   });
  // }


listaEmpresas = [
  {
    logo: "../assets/img/logo_ed.png",
    empresa: "ED Company",
    cargo: "Assistente de TI",
    periodo: "Ago/2021 - Atual",
    atividades: "• Apoio ao time de desenvolvedores do cliente da área previdenciária. • Desenvolvimento e manutenção de sistemas e Landing Page. • Colaboração com desenvolvedores back-end e web designers para melhorar a usabilidade. • Desenvolvimento em AngulasJS e backend em Node.js, utilizando APIs e GraphQL. • Desenvolvimento em Wordpress. • Atuação em time ágil. • Estipular uma estimativa de tempo de entrega de cada User Story e auto responsabilidade em sua execução. • Controle de código-fonte com GIT. • Manter a qualidade, organização e automação de toda a aplicação junto com o restante da equipe."
  },
  {
    logo: "../assets/img/logo_bms.png",
    empresa: "BMS Projetos & Consultoria",
    cargo: "Assistente de TI",
    periodo: "Jun/2020 - Ago/2021",
    atividades: "Desenvolvimento e manutenção de aplicações e interface gráficas utilizando as tecnologias base da Web como HTML, CSS, JavaScript, Bootstrap, PHP e SQL Server. Automatização de processos operacionais utilizando programação em VBA. Utilização da ferramenta Power BI para desenvolver, realizar manutenção e modelagem de indicadores. Tratamento de dados através do Power Query e utilização de fórmulas DAX. Suporte técnico para diversos setores da empresa, executando procedimentos necessários para resoluções dos problemas."
  },
  {
    logo: "../assets/img/logo_gps.png",
    empresa: "Top Service Servicos E Sistemas (Grupo GPS)",
    cargo: "Analista de Administração de Pessoal Sr",
    periodo: "Jun/2015 - Nov/2019",
    atividades: ""
  },
  {
    logo: "../assets/img/logo_pmluz.png",
    empresa: "Pmluz Consultoria Recursos Humanos",
    cargo: "Assistente de Departamento pessoal ",
    periodo: "Fev/2013 - Mai/2015",
    atividades: ""
  },
  {
    logo: "../assets/img/logo_alair.png",
    empresa: "Alair dos Santos Comércio de Peças e Acessórios Ltda",
    cargo: "Auxiliar de escritório ",
    periodo: "Jul/2011 - Jan/2013",
    atividades: ""
  },
  {
    logo: "../assets/img/logo_elithe.png",
    empresa: "Grupo Elithe",
    cargo: "Auxiliar de Departamento De Pessoal",
    periodo: "Jul/2010 - Jul/2011",
    atividades: ""
  }
]

}
