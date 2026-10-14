import { Component, ElementRef, afterNextRender, inject, input, DestroyRef } from '@angular/core';
import { Profile } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({
  selector: 'app-hero',
  template: `<section id="hero" class="hero section dark-background">
    <img
      [src]="profile().hero"
      alt="Fondo tecnológico ilustrado ficticio"
      data-aos="fade-in"
      fetchpriority="high"
      width="1920"
      height="1080"
    />
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <h2>{{ profile().shortName }}</h2>
      <p>
        Soy <span class="typed">{{ profile().roles[0] }}</span>
      </p>
      <span class="visually-hidden">{{ profile().roles.join(', ') }}</span>
    </div>
  </section>`,
})
export class HeroComponent {
  readonly profile = input.required<Profile>();
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ui = inject(UiService);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const typed = this.el.nativeElement.querySelector('.typed');
      if (typed) this.destroy.onDestroy(this.ui.typed(typed, this.profile().roles));
      this.ui.refresh();
    });
  }
}
