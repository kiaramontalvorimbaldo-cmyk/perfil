import { Component, computed, input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Profile } from '../core/models';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly profile = input.required<Profile>();
  private readonly builder = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=' +
        encodeURIComponent(this.profile().mapQuery) +
        '&output=embed',
    ),
  );
  readonly form = this.builder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/.*\S.*/)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    subject: ['', [Validators.required, Validators.maxLength(150), Validators.pattern(/.*\S.*/)]],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(2000),
        Validators.pattern(/.*\S.*/),
      ],
    ],
  });
  readonly sent = signal(false);
  readonly attempted = signal(false);
  invalid(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.attempted());
  }
  submit(): void {
    this.sent.set(false);
    this.attempted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    this.form.reset();
    this.attempted.set(false);
  }
}
