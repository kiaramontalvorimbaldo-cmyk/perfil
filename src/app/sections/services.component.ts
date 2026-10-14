import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Services } from '../core/models';
@Component({
  selector: 'app-services',
  imports: [RouterLink],
  template: `<section id="services" class="services section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Áreas de interés</h2>
      <p>{{ services().description }}</p>
    </div>
    <div class="container">
      <div class="row gy-4">
        @for (service of services().items; track service.id) {
          <div
            class="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            [attr.data-aos-delay]="100 + $index * 100"
          >
            <div class="icon flex-shrink-0">
              <i [class]="'bi ' + service.icon" aria-hidden="true"></i>
            </div>
            <div>
              <h4 class="title">
                <a [routerLink]="['/services', service.id]">{{ service.title }}</a>
              </h4>
              <p class="description">{{ service.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  </section>`,
})
export class ServicesComponent {
  readonly services = input.required<Services>();
}
