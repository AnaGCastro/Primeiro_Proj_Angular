import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
    <h2 [class.sucesso]="isSucesso"> Saída</h2>
    <p [style.color]="cor"> binding de estilos </p>
    <input type="text" value="{{ texto }}" [disabled]="isDisable"/>
  `,
  styles: [
    `.sucesso{
      color: lightgreen;
    }
    .error{
      color: red;
    }`,
  ],
})

export class TerceiroComponent {
  public cor: string = "blue";
  public isSucesso: boolean = true;
  public isDisable: boolean = false;
  public texto: string = "Digite algo . . ."
}
