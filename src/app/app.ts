import { Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './core/data.service';
import { UiService } from './core/ui.service';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ScrollTopComponent } from './layout/scroll-top.component';
import { PreloaderComponent } from './layout/preloader.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent, PreloaderComponent],
  template: `<a class="visually-hidden-focusable skip-link" href="#main-content"
      >Saltar al contenido</a
    >
    @if (store.data(); as data) {
      <app-header [profile]="data.profile" />
      <main id="main-content" class="main" tabindex="-1"><router-outlet /></main>
      <app-footer [name]="data.profile.shortName" /><app-scroll-top />
    } @else if (store.error()) {
      <main class="container py-5">
        <h1>No se pudo cargar el portafolio</h1>
        <p>Revisa tu conexión e inténtalo de nuevo.</p>
        <button class="btn btn-primary" (click)="store.load()">Reintentar</button>
      </main>
    } @else {
      <app-preloader />
    }`,
})
export class App {
  readonly store = inject(DataService);
  private readonly ui = inject(UiService);
  constructor() {
    this.store.load();
    afterNextRender(() => this.ui.initAos());
  }
}
