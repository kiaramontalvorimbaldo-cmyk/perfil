import { Injectable } from '@angular/core';
import { GalleryImage } from './models';
interface Destroyable {
  destroy: () => void;
}
interface IsotopeInstance extends Destroyable {
  arrange(options: { filter: string }): void;
  layout(): void;
}
interface LightboxInstance extends Destroyable { open(): void; }
interface VendorWindow extends Window {
  AOS: { init(options: object): void; refreshHard(): void };
  Typed: new (element: Element, options: object) => Destroyable;
  PureCounter: new (options: object) => object;
  GLightbox: (options: object) => LightboxInstance;
  Isotope: new (element: Element, options: object) => IsotopeInstance;
  Swiper: new (
    element: Element,
    options: object,
  ) => { destroy(deleteInstance?: boolean, cleanStyles?: boolean): void };
  imagesLoaded(element: Element, callback: () => void): void;
}
@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly vendor = window as unknown as VendorWindow;
  private gallery: LightboxInstance | undefined;
  initAos(): void {
    this.vendor.AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }
  refresh(): void {
    this.vendor.AOS.refreshHard();
  }
  typed(element: Element, roles: string[]): () => void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = roles[0] ?? '';
      return () => {};
    }
    const instance = new this.vendor.Typed(element, {
      strings: roles,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => instance.destroy();
  }
  counters(element: HTMLElement): () => void {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        new this.vendor.PureCounter({ selector: '#stats .purecounter', duration: 1, once: true });
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }
  skills(element: HTMLElement): () => void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          element
            .querySelectorAll<HTMLElement>('.progress-bar')
            .forEach((bar) => (bar.style.width = (bar.getAttribute('aria-valuenow') ?? '0') + '%'));
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }
  openGallery(images: GalleryImage[], index: number): void {
    this.closeGallery();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const instance = this.vendor.GLightbox({
      elements: images.map(image => ({ href: image.src, title: image.alt, type: 'image' })),
      startAt: index,
      onClose: () => queueMicrotask(() => { instance.destroy(); if (this.gallery === instance) this.gallery = undefined; }),
      ...(reducedMotion ? { openEffect: 'none', closeEffect: 'none', slideEffect: 'none' } : {}),
    });
    this.gallery = instance;
    instance.open();
  }
  closeGallery(): void {
    this.gallery?.destroy();
    this.gallery = undefined;
  }
  isotope(element: HTMLElement, ready: (instance: IsotopeInstance) => void): () => void {
    let instance: IsotopeInstance | undefined;
    let alive = true;
    this.vendor.imagesLoaded(element, () => {
      if (alive) {
        instance = new this.vendor.Isotope(element, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
        });
        ready(instance);
        this.refresh();
      }
    });
    return () => {
      alive = false;
      instance?.destroy();
    };
  }
  swiper(element: HTMLElement, testimonials = false): () => void {
    const instance = new this.vendor.Swiper(element, {
      loop: true,
      speed: 600,
      autoplay: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? false
        : { delay: 5000 },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { el: element.querySelector('.swiper-pagination'), clickable: true },
      keyboard: { enabled: true },
      a11y: { enabled: true, paginationBulletMessage: 'Ir a la diapositiva {{index}}' },
      ...(testimonials
        ? { breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } } }
        : {}),
    });
    return () => instance.destroy(true, true);
  }
}
