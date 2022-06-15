import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modalFormacao: boolean = false;
  modalCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  formacao() {
    this.modalFormacao = !this.modalFormacao;
  }

  cursos() {
    this.modalCursos = !this.modalCursos;
  }

  fecharModal() {
    this.modalFormacao = false;
    this.modalCursos = false;
  }
}
