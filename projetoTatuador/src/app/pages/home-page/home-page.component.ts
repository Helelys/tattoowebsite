import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeroBannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
