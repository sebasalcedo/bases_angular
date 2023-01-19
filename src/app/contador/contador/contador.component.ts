import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <p>
      La base es: <strong> {{ base }} </strong>
    </p>

    <button (click)="acumular(base)">+1</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">-1</button>
  `,
})
export class ContadorComponent {
  numero: number = 10;

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
