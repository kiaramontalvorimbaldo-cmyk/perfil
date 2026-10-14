import { Component, HostListener, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profile } from '../core/models';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly profile = input.required<Profile>();
  readonly open = signal(false);
  readonly active = signal('hero');
  readonly links = [
    { id: 'hero', label: 'Inicio', icon: 'bi-house' },
    { id: 'about', label: 'Sobre mí', icon: 'bi-person' },
    { id: 'resume', label: 'Trayectoria', icon: 'bi-file-earmark-text' },
    { id: 'portfolio', label: 'Portafolio', icon: 'bi-images' },
    { id: 'services', label: 'Áreas de interés', icon: 'bi-hdd-stack' },
    { id: 'multimedia', label: 'Multimedia', icon: 'bi-play-circle' },
    { id: 'contact', label: 'Contacto', icon: 'bi-envelope' },
  ];
  @HostListener('window:scroll') scroll(): void {
    document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => {
      if (
        window.scrollY + 200 >= section.offsetTop &&
        window.scrollY + 200 < section.offsetTop + section.offsetHeight
      )
        this.active.set(section.id);
    });
  }
}
