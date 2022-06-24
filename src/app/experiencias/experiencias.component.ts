import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IMGS } from 'src/constants/imagens';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {
  ed = IMGS.LOGO_ED;
  bms = IMGS.LOGO_BMS;
  gps = IMGS.LOGO_GPS;
  pmluz = IMGS.LOGO_PMLUZ;
  alair = IMGS.LOGO_ALAIR;
  elithe = IMGS.LOGO_ELITHE;
  valorCarrousel = 112;
  index = 0;

  constructor() { }

  ngOnInit() {

    window.onload = function () {
      $('#empresa-0').css({border: '3px solid #28C18D'});
     }

    $('#seta-dir').click(() => {
      if(this.index === 5) return
      this.index++;
      $('#cards-carrousel').animate({right: this.index * this.valorCarrousel+'rem'}, 1000);
      console.log(this.index);
    })

    $('#seta-esq').click(() => {
      if(this.index === 0) return
      this.index--;
      $('#cards-carrousel').animate({right: this.index * this.valorCarrousel+'rem'}, 1000);
      console.log(this.index);
    })

  }

  verAtividade(empresa: string) {
    const nome = document.getElementById(empresa);

  }




listaEmpresas = [
  {
    logo: this.ed,
    nome: "ED Company",
    cargo: "Assistente de TI",
    periodo: "Ago/2021 - Atual",
    atividades: "Apoio ao time de desenvolvedores do cliente da área previdenciária. Desenvolvimento e manutenção de sistemas e Landing Page. Colaboração com desenvolvedores back-end e web designers para melhorar a usabilidade." +
    "Desenvolvimento em AngulasJS e backend em Node.js, utilizando APIs e GraphQL. Desenvolvimento em Wordpress. • Atuação em time ágil. Estipular uma estimativa de tempo de entrega de cada User Story e auto responsabilidade em sua execução." +
    "Controle de código-fonte com GIT. • Manter a qualidade, organização e automação de toda a aplicação junto com o restante da equipe."
  },
  {
    logo: this.bms,
    nome: "BMS Projetos & Consultoria",
    cargo: "Assistente de TI",
    periodo: "Jun/2020 - Ago/2021",
    atividades: "Desenvolvimento e manutenção de aplicações e interface gráficas utilizando as tecnologias base da Web como HTML, CSS, JavaScript, Bootstrap, PHP e SQL Server." +
    "Automatização de processos operacionais utilizando programação em VBA. Utilização da ferramenta Power BI para desenvolver, realizar manutenção e modelagem de indicadores." +
    "Tratamento de dados através do Power Query e utilização de fórmulas DAX. Suporte técnico para diversos setores da nome, executando procedimentos necessários para resoluções dos problemas."
  },
  {
    logo: this.gps,
    nome: "Top Service Servicos E Sistemas (Grupo GPS)",
    cargo: "Analista de Administração de Pessoal Sr",
    periodo: "Jun/2015 - Nov/2019",
    atividades: "Responsável por toda a equipe administrativa. Quantitativo de efetivo.Tratativa e conferência de folha de pagamento, folha de ponto e planilhas de benefício (VT, VR, VA, AM, AO e Premiações)." +
    "Controle de ASOs e reciclagens. Gestão administrativa de contratos de facilite, brigada de incêndio e segurança. Conferência e consolidação das informações de todos os departamentos para elaboração de resultados e indicativos para a gerência." +
    "Suporte a gerência no planejamento estratégico. Conhecimento na implantação, manutenção e desmobilização de contratos (cumprimentos de organogramas)." +
    "Reuniões periódicas com clientes e colaboradores,Avaliações de desempenho, Treinamentos e Workshops. Experiência com o sistema SmartControl e ponto biométrico (Henry)." +
    "Experiência com formulas de Excel. Experiência com Power BI"
  },
  {
    id: 4,
    logo: this.pmluz,
    nome: "Pmluz Consultoria Recursos Humanos",
    cargo: "Assistente de Departamento pessoal ",
    periodo: "Fev/2013 - Mai/2015",
    atividades: "Cálculos e Pagamentos de Funcionários (Folha de pagamento, férias, 13º, rescisão) FGTS, GPS, CAGED, SEFIP, RAIS e outros encargos. Emissão de recibos de salários e entregas de contracheque" +
    "Processo de Admissão, Demissão eHomologação. Preposto em audiências trabalhistas Cadastro de Funcionários, sistema VRH – Embria. Controle de PCMSO. PPRA. Controle de ponto eletrônico (Cartão). Controle de vale-transporte e demais benefícios."
  },
  {
    id: 5,
    logo: this.alair,
    nome: "Alair dos Santos Comércio de Peças e Acessórios Ltda",
    cargo: "Auxiliar de escritório ",
    periodo: "Jul/2011 - Jan/2013",
    atividades: "Elaboração de Notas Fiscais e Recibos de pagamento. Compra de peças e acessórios para Automóveis. Serviços de coleta e entrega de carros importados para concessionária e clientes em domicílio." +
    "Atendimento a clientes. Controle de folha de ponto dos funcionários e fluxo de caixa."
  },
  {
    id: 6,
    logo: this.elithe,
    nome: "Grupo Elithe",
    cargo: "Auxiliar de Departamento De Pessoal",
    periodo: "Jul/2010 - Jul/2011",
    atividades: "Auxiliar na elaboração de documentos, relatórios, planilhas e formulários diversos. Apontamento de folha de ponto, expedir documentos administrativos," +
    "acompanhar entrada e saída de documentos, admissão/ rescisão de funcionários, emissão de contratos, registro de empregado, viagens para contratação e administração de pessoal," +
    "folha de pagamento, conhecimento no sistema GI. Organização do arquivo, elaboração de planilhas de controle de estoque e requisição de material. Entrega de contracheques e folha de ponto."
  }
]

}
