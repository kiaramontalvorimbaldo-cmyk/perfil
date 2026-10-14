import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  template:
    '<section class="section"><div class="container"><h1>Página no encontrada</h1><p>El enlace no corresponde a una página del portafolio.</p><a routerLink="/">Volver al inicio</a></div></section>',
})
export class NotFoundComponent {}
