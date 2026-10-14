import { Component, inject, computed, afterNextRender } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../core/data.service';
import { UiService } from '../core/ui.service';
@Component({ imports: [RouterLink], templateUrl: './service-details.component.html' })
export class ServiceDetailsComponent {
  readonly store = inject(DataService);
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  readonly service = computed(() =>
    this.store.data()?.services.items.find((s) => s.id === this.params()?.get('id')),
  );
  private readonly ui = inject(UiService);
  constructor() {
    afterNextRender(() => this.ui.refresh());
  }
}
