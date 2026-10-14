import { Component, input, afterNextRender, inject, ElementRef, DestroyRef } from '@angular/core';
import { Testimonials } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({ selector: 'app-testimonials', templateUrl: './testimonials.component.html' })
export class TestimonialsComponent {
  readonly testimonials = input.required<Testimonials>();
  private readonly ui = inject(UiService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() =>
      this.destroy.onDestroy(
        this.ui.swiper(this.el.nativeElement.querySelector<HTMLElement>('.swiper')!, true),
      ),
    );
  }
}
