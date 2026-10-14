import {
  Component,
  input,
  afterNextRender,
  inject,
  ElementRef,
  DestroyRef,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Projects } from '../core/models';
import { UiService } from '../core/ui.service';
@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  readonly projects = input.required<Projects>();
  readonly filter = signal('*');
  readonly ready = signal(false);
  private arrange: ((options: { filter: string }) => void) | undefined;
  private readonly ui = inject(UiService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const grid = this.el.nativeElement.querySelector<HTMLElement>('.isotope-container')!;
      this.destroy.onDestroy(
        this.ui.isotope(grid, (instance) => {
          this.arrange = (options) => instance.arrange(options);
          this.ready.set(true);
        }),
      );
    });
  }
  select(category: string): void {
    this.filter.set(category);
    this.arrange?.({ filter: category });
    this.ui.refresh();
  }
  open(event: Event, index: number): void {
    event.preventDefault();
    this.ui.openGallery(this.projects().items.map(project => ({src: project.image, alt: project.title + ' (ficticio)'})), index);
  }
}
