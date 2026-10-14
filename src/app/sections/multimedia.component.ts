import { Component, input, inject } from '@angular/core';
import { Profile } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({ selector: 'app-multimedia', templateUrl: './multimedia.component.html' })
export class MultimediaComponent {
  readonly media = input.required<Profile['multimedia']>();
  private readonly ui = inject(UiService);
  open(event: Event, index: number): void {
    event.preventDefault();
    this.ui.openGallery(this.media().gallery, index);
  }
}
