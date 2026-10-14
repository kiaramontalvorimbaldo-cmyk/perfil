import {
  Component,
  inject,
  computed,
  afterNextRender,
  ElementRef,
  DestroyRef,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../core/data.service';
import { UiService } from '../core/ui.service';
@Component({ imports: [RouterLink], templateUrl: './portfolio-details.component.html' })
export class PortfolioDetailsComponent {
  private readonly store = inject(DataService);
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  readonly project = computed(() =>
    this.store.data()?.projects.items.find((p) => p.id === this.params()?.get('id')),
  );
  private readonly ui = inject(UiService);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const slider = this.el.nativeElement.querySelector<HTMLElement>('.swiper');
      if (slider) this.destroy.onDestroy(this.ui.swiper(slider));
      this.ui.refresh();
    });
  }
}
