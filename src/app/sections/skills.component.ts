import { Component, input, afterNextRender, inject, ElementRef, DestroyRef } from '@angular/core';
import { Skills } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({
  selector: 'app-skills',
  template: `<section id="skills" class="skills section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Habilidades</h2>
      <p>{{ skills().description }}</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row skills-content skills-animation">
        @for (column of [0, 1]; track column) {
          <div class="col-lg-6">
            @for (skill of skills().items.slice(column * 3, column * 3 + 3); track skill.name) {
              <div class="progress">
                <span class="skill"
                  ><span>{{ skill.name }}</span
                  ><i class="val">{{ skill.value }}%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    [attr.aria-label]="skill.name"
                    [attr.aria-valuenow]="skill.value"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </section>`,
})
export class SkillsComponent {
  readonly skills = input.required<Skills>();
  private readonly ui = inject(UiService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() =>
      this.destroy.onDestroy(
        this.ui.skills(this.el.nativeElement.querySelector<HTMLElement>('section')!),
      ),
    );
  }
}
