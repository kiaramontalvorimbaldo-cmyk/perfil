import { Component, inject, afterNextRender, DestroyRef } from '@angular/core';
import { UiService } from '../core/ui.service';
import { DataService } from '../core/data.service';
import { HeroComponent } from '../sections/hero.component';
import { AboutComponent } from '../sections/about.component';
import { FactsComponent } from '../sections/facts.component';
import { SkillsComponent } from '../sections/skills.component';
import { ResumeComponent } from '../sections/resume.component';
import { PortfolioComponent } from '../sections/portfolio.component';
import { ServicesComponent } from '../sections/services.component';
import { TestimonialsComponent } from '../sections/testimonials.component';
import { ContactComponent } from '../sections/contact.component';
import { MultimediaComponent } from '../sections/multimedia.component';
@Component({
  imports: [
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    MultimediaComponent,
  ],
  template: `@if (store.data(); as data) {
    <app-hero [profile]="data.profile" /><app-about [profile]="data.profile" /><app-facts
      [facts]="data.facts"
    /><app-skills [skills]="data.skills" /><app-resume
      [resume]="data.resume"
      [profile]="data.profile"
    /><app-portfolio [projects]="data.projects" /><app-services
      [services]="data.services"
    /><app-testimonials [testimonials]="data.testimonials" /><app-multimedia
      [media]="data.profile.multimedia"
    /><app-contact [profile]="data.profile" />
  }`,
})
export class HomeComponent {
  readonly store = inject(DataService);
  private readonly ui = inject(UiService);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    this.destroy.onDestroy(() => this.ui.closeGallery());
    afterNextRender(() => {
      this.ui.refresh();
    });
  }
}
