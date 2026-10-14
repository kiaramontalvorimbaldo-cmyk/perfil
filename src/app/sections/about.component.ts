import { Component, input } from '@angular/core';
import { Profile } from '../core/models';
@Component({ selector: 'app-about', templateUrl: './about.component.html' })
export class AboutComponent {
  readonly profile = input.required<Profile>();
}
