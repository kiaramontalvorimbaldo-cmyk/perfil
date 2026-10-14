import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
describe('Formulario de contacto de demostración', () => {
  const create = () => TestBed.createComponent(ContactComponent).componentInstance;
  it('rechaza campos vacíos y espacios sin nombre', () => {
    const component = create();
    component.submit();
    expect(component.sent()).toBe(false);
    component.form.setValue({
      name: '   ',
      email: 'prueba@example.org',
      subject: 'Consulta',
      message: 'Mensaje suficientemente largo',
    });
    expect(component.form.invalid).toBe(true);
  });
  it('rechaza emails incorrectos y mensajes cortos', () => {
    const component = create();
    component.form.setValue({
      name: 'Prueba',
      email: 'incorrecto',
      subject: 'Consulta',
      message: 'hola',
    });
    component.submit();
    expect(component.invalid('email')).toBe(true);
    expect(component.invalid('message')).toBe(true);
    expect(component.sent()).toBe(false);
  });
  it('muestra éxito solo con datos válidos y limpia los campos', () => {
    const component = create();
    component.form.setValue({
      name: 'Prueba',
      email: 'prueba@example.org',
      subject: 'Consulta',
      message: 'Mensaje suficientemente largo',
    });
    component.submit();
    expect(component.sent()).toBe(true);
    expect(component.form.getRawValue().message).toBe('');
  });
});
