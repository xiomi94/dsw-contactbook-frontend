import { Component, inject, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ContactModel } from 'src/app/models/contact.model';

interface NewContactForm {
  name: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonInput,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent
  ],
})
export class AddNewContactComponent {

  formBuilder = inject(NonNullableFormBuilder)

  isModalOpen = input<boolean>(false);

  closeModal = output<void>();
  saveNewContact = output<ContactModel>();

  newContactForm = signal<FormGroup<NewContactForm>>(
    this.formBuilder.group<NewContactForm>({
      name: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      phoneNumber: this.formBuilder.control('', {
        validators: [Validators.required],
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required]
      })
    })
  )

  emitCloseModal(): void {
    this.newContactForm().reset();
    this.closeModal.emit();
  }

  confirmFormData(): void {
    const form = this.newContactForm();
    if (!form.valid) {
      return;
    }

    const newContact: ContactModel = {
      name: form.get('name')!.value,
      phoneNumber: form.get('phoneNumber')!.value,
      email: form.get('email')!.value,
    }

    form.reset();
    this.saveNewContact.emit(newContact);
  }

}
