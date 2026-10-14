import { Component, input, afterNextRender, inject, ElementRef, DestroyRef } from '@angular/core';
import { Fact } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({
  selector: 'app-facts',
  template: `<section id="stats" class="stats section" aria-label="Cifras académicas ficticias">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        @for (fact of facts(); track fact.label) {
          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i [class]="'bi ' + fact.icon" aria-hidden="true"></i
              ><span
                data-purecounter-start="0"
                [attr.data-purecounter-end]="fact.value"
                data-purecounter-duration="1"
                class="purecounter"
                >{{ fact.value }}</span
              >
              <p>
                <strong>{{ fact.label }}</strong> <span>{{ fact.description }}</span>
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  </section>`,
})
export class FactsComponent {
  readonly facts = input.required<Fact[]>();
  private readonly ui = inject(UiService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() =>
      this.destroy.onDestroy(
        this.ui.counters(this.el.nativeElement.querySelector<HTMLElement>('section')!),
      ),
    );
  }
}
