import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  ultimaActualizacion(): string {
    const fecha = new Date();
    return fecha.toDateString();
  }

}
