import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  Fact,
  PortfolioData,
  Profile,
  Projects,
  Resume,
  Services,
  Skills,
  Testimonials,
} from './models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly http = inject(HttpClient);
  readonly data = signal<PortfolioData | null>(null);
  readonly error = signal(false);
  load(): void {
    forkJoin({
      profile: this.http.get<Profile>('data/profile.json'),
      facts: this.http.get<Fact[]>('data/facts.json'),
      skills: this.http.get<Skills>('data/skills.json'),
      resume: this.http.get<Resume>('data/resume.json'),
      projects: this.http.get<Projects>('data/projects.json'),
      services: this.http.get<Services>('data/services.json'),
      testimonials: this.http.get<Testimonials>('data/testimonials.json'),
    }).subscribe({
      next: (data) => {
        this.error.set(false);
        this.data.set(data);
      },
      error: () => this.error.set(true),
    });
  }
}
