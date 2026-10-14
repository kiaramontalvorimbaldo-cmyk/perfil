import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
describe('Carga del contenido', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }),
  );
  afterEach(() => TestBed.inject(HttpTestingController).verify());
  it('informa un fallo de red y permite reintentar', () => {
    const store = TestBed.inject(DataService);
    const http = TestBed.inject(HttpTestingController);
    store.load();
    const first = http.match((request) => request.url.startsWith('data/'));
    expect(first.length).toBe(7);
    first[0].flush('No disponible', { status: 503, statusText: 'Unavailable' });
    expect(store.error()).toBe(true);
    expect(store.data()).toBeNull();
    store.load();
    const retry = http.match((request) => request.url.startsWith('data/'));
    expect(retry.length).toBe(7);
    retry.forEach((request) => request.flush({}));
    expect(store.error()).toBe(false);
    expect(store.data()).not.toBeNull();
  });
});
