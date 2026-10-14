import { Component, HostListener, signal } from '@angular/core';
@Component({
  selector: 'app-scroll-top',
  template: `<button
    type="button"
    id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center"
    [class.active]="visible()"
    (click)="up()"
    aria-label="Volver al inicio"
  >
    <i class="bi bi-arrow-up-short" aria-hidden="true"></i>
  </button>`,
})
export class ScrollTopComponent {
  readonly visible = signal(false);
  @HostListener('window:scroll') scroll(): void {
    this.visible.set(window.scrollY > 100);
  }
  up(): void {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }
}
