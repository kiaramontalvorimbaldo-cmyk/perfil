import { Component, input } from '@angular/core';
import { Profile, Resume } from '../core/models';
@Component({ selector: 'app-resume', templateUrl: './resume.component.html' })
export class ResumeComponent {
  readonly resume = input.required<Resume>();
  readonly profile = input.required<Profile>();
}
