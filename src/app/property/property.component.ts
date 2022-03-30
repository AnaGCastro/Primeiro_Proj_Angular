import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
  <button type="button" (click)="botaoClicado()">{{ textoBotao }}</button>`,

})
export class PropertyComponent {
  public textoBotao: string = "ME CLIQUE"
  public botaoClicado(): void{
    this.textoBotao = "OBRIGADA"
  }

}
