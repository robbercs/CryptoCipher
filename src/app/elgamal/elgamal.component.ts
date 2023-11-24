import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-elgamal',
  templateUrl: './elgamal.component.html',
  styleUrls: ['./elgamal.component.css']
})
export class ElgamalComponent {
  pasoActual = 6;
  p: number = 0;
  g: number = 0;
  a: number = 0;
  A: number = 0;
  k: number = 0;
  m: number = 0;
  c1: number = 0;
  c2: number = 0;
  d: number = 0;

  clavePrivadaValida: boolean = true;
  aleatorioValidado: boolean = true;
  mensajeValidado: boolean = true;
  filas: number[][] = [];
  filasNumeros: { numero: number; orden: number }[][] = [];

  elementosDeMayorOrden: { numero: number; orden: number }[] = [];
  primos = [
    97, 101, 103, 107, 109, 113, 127, 131, 137, 139,
    149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
    197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
    257, 263, 269, 271, 277, 281, 283, 293, 307, 311,
    313, 317, 331, 337, 347, 349, 353, 359, 367, 373,
    379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
    439, 443, 449, 457, 461, 463, 467, 479, 487, 491,
    499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
    571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
    631, 641, 643, 647, 653, 659, 661, 673, 677, 683,
    691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
    761, 769, 773, 787, 797, 809, 811, 821, 823, 827,
    829, 839, 853, 857, 859, 863, 877, 881, 883, 887,
    907, 911, 919, 929, 937, 941, 947, 953, 967, 971,
    977, 983, 991, 997
  ];

  nombresPasos: string[] = [
    'Introducción',
    'Elegir p',
    'Elegir g',
    'Creación de clave pública',
    'Encriptación',
    'Desencriptación'
  ];
  ngOnInit(): void {
    // this.dividirEnFilas(16);
    this.dividirEnFilas(this.getWindowWidth() >= 883 ? 16 : 9);
  }

  constructor(private el: ElementRef) { }

  scrollToTop() {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
    this.el.nativeElement.ownerDocument.documentElement.scrollTop = 0;
  }

  avanzarAlSiguientePaso() {
    console.log(this.pasoActual);
    if (this.pasoActual === 1) {
      this.pasoActual++;
    } else if (this.pasoActual === 2 && this.p !== 0) {
      this.pasoActual++;
    } else if (this.pasoActual === 3 && this.g !== 0) {
      this.pasoActual++;
    } else if (this.pasoActual === 4 && this.A !== 0) {
      this.pasoActual++;
    } else if (this.pasoActual === 5 && this.a !== 0) {
      this.pasoActual++;
    } else if (this.pasoActual === 6 && this.mensajeValidado && this.aleatorioValidado && this.clavePrivadaValida) {
      this.pasoActual++;
    }
    this.scrollToTop();
  }

  retrocederAlPasoAnterior() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
    this.scrollToTop();
  }


  seleccionarPrimo(p: number) {
    this.p = p;
    this.calcularYOrdenarElementosDeMayorOrden();
    this.dividirEnFilasNumeros(this.getWindowWidth() >= 883 ? 10 : 8);
    this.avanzarAlSiguientePaso();
  }

  dividirEnFilas(filas: number): void {
    const numColumnas = filas;
    this.filas = [];

    for (let i = 0; i < this.primos.length; i += numColumnas) {
      this.filas.push(this.primos.slice(i, i + numColumnas));
    }
  }
  dividirEnFilasNumeros(filas: number): void {
    const numColumnas = filas;
    this.filasNumeros = [];

    for (let i = 0; i < this.elementosDeMayorOrden.length; i += numColumnas) {
      this.filasNumeros.push(this.elementosDeMayorOrden.slice(i, i + numColumnas));
    }
  }

  calcularYOrdenarElementosDeMayorOrden() {
    const elementos: { numero: number; orden: number }[] = [];

    for (let i = 1; i < this.p; i++) {
      const orden = this.calcularOrden(i);
      elementos.push({ numero: i, orden: orden });
    }
    this.elementosDeMayorOrden = elementos.sort((a, b) => b.orden - a.orden).slice(0, 80);
  }

  calcularOrden(a: number): number {
    let resultado = 1;
    let base = a;

    while (base !== 1) {
      base = (base * a) % this.p;
      resultado++;
    }

    return resultado;
  }

  seleccionarElemento(g: number) {
    this.g = g;
    this.avanzarAlSiguientePaso();
  }

  actualizarA() {
    if (!isNaN(this.a) && this.a >= 1 && this.a <= this.p - 1) {
      this.A = this.calcularAPublica();
      this.clavePrivadaValida = true;
    } else {
      this.clavePrivadaValida = false;
    }
  }

  actualizarM() {
    if (!isNaN(this.m) && this.m >= 1 && this.m <= this.p - 1) {
      this.mensajeValidado = true;
      const resultadoEncriptacion = this.encriptarMensaje(this.m, this.A, this.p, this.g);
      this.c1 = resultadoEncriptacion.c1;
      this.c2 = resultadoEncriptacion.c2;
      this.d = this.desencriptarMensaje(this.c1, this.c2, this.a, this.p);
    } else {
      this.mensajeValidado = false;
    }
  }
  actualizarK() {
    if (!isNaN(this.k) && this.k >= 1 && this.k <= this.p) {
      this.aleatorioValidado = true;
      const resultadoEncriptacion = this.encriptarMensaje(this.m, this.A, this.p, this.g);
      this.c1 = resultadoEncriptacion.c1;
      this.c2 = resultadoEncriptacion.c2;
      this.d = this.desencriptarMensaje(this.c1, this.c2, this.a, this.p);
    } else {
      this.aleatorioValidado = false;
    }
  }

  powerModulo(base: number, exponent: number, modulo: number): number {
    let result = 1;

    base = base % modulo;

    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulo;
      }

      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulo;
    }

    return result;
  }

  calcularAPublica(): number {
    return this.powerModulo(this.g, this.a, this.p);
  }

  encriptarMensaje(mensaje: number, clavePublicaDestino: number, p: number, g: number): { c1: number, c2: number } {
    const claveEfimeraPrivada = Math.floor(Math.random() * (p - 1)) + 1;
    const c1 = this.powerModulo(g, claveEfimeraPrivada, p);
    const s = this.powerModulo(clavePublicaDestino, claveEfimeraPrivada, p);
    const c2 = (mensaje * s) % p;

    return { c1, c2 };
  }

  desencriptarMensaje(c1: number, c2: number, clavePrivada: number, p: number): number {
    const s = this.powerModulo(c1, clavePrivada, p);
    const sInverso = this.encontrarInversoModulo(s, p);
    const mensaje = (c2 * sInverso) % p;

    return mensaje;
  }

  encontrarInversoModulo(a: number, m: number): number {
    let m0 = m;
    let y = 0;
    let x = 1;

    if (m === 1) {
      return 0;
    }

    while (a > 1) {
      const q = Math.floor(a / m);
      let t = m;

      m = a % m;
      a = t;
      t = y;

      y = x - q * y;
      x = t;
    }

    if (x < 0) {
      x += m0;
    }

    return x;
  }

  getWindowWidth() {
    return window.innerWidth;
  }

}
