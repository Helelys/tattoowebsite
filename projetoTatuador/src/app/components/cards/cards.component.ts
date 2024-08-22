import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input()
  imagePlaceHolder:string = "Insira aqui";

  @Input()
  titlePlaceHolder:string = "Insira o título";

  @Input()
  textPlaceHolder:string = "Insira o texto";
}
