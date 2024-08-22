import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";

@Component({
  selector: 'app-styles-page',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './styles-page.component.html',
  styleUrl: './styles-page.component.css'
})
export class StylesPageComponent {

}
