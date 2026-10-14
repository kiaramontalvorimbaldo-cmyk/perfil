import { Component, input } from '@angular/core';
@Component({
  selector: 'app-footer',
  template: `<footer id="footer" class="footer position-relative light-background">
    <div class="container">
      <div class="copyright text-center">
        <p>
          © <span>Copyright</span> <strong class="px-1 sitename">{{ name() }}</strong>
          <span>Todos los derechos reservados</span>
        </p>
      </div>
      <div class="credits">
        Designed by
        <a href="https://bootstrapmade.com/" target="_blank" rel="noopener">BootstrapMade</a> |
        <a href="https://bootstrapmade.com/tools/" target="_blank" rel="noopener">DevTools</a>
      </div>
    </div>
  </footer>`,
})
export class FooterComponent {
  readonly name = input.required<string>();
}
