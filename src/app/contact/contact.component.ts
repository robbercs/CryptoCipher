import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombreApellidos: any;
  email: any;
  asunto: any;
  mensaje: any;

  constructor(private router: Router) { }


  enviarFormulario() {
    console.log("entro");
    if (this.formularioValido()) {
      const datos = {
        nombreApellidos: this.nombreApellidos,
        email: this.email,
        asunto: this.asunto,
        mensaje: this.mensaje
      };
      console.log(datos);
      this.router.navigate(['/']);
    }
  }

  formularioValido(): boolean {
    if (!this.nombreApellidos || !this.email || !this.asunto || !this.mensaje) {
      alert("Please fill out all the fields")
      return false;
    }
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(this.email)) {
      alert("Please introduce a valid email");
      return false;
    }
    return true;
  }

}
