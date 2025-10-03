import { Component, inject, OnInit, signal } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ContactListComponent } from "src/app/components/contact-list/contact-list.component";
import { ContactModel } from 'src/app/models/contact.model';
import { Backend } from 'src/app/services/backend';
import { AddNewContactComponent } from "src/app/components/add-new-contact/add-new-contact.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    ContactListComponent,
    IonButton,
    AddNewContactComponent,
],
})
export class HomePage implements OnInit {

  contacts = signal<ContactModel[]>([]);
  backend = inject(Backend);
  isModalOpen = signal(false);

  ngOnInit(): void {
    this.loadAllContacts();
  }

  loadAllContacts(): void {
    this.backend.getContacts().subscribe((response) => {
      this.contacts.set(response);
    })
  }

  deleteContact(contact: ContactModel): void {
    this.backend.deleteContact(contact.id!).subscribe(() => {
      this.loadAllContacts();
    })
  }

  setModalOpen(isOpen: boolean): void {
    this.isModalOpen.set(isOpen);
  }

  saveNewContact(contact: ContactModel): void {
    this.isModalOpen.set(false);
    this.backend.addNewContact(contact).subscribe((response) => {
      this.contacts.update((oldValue) => {
        return [...oldValue, response];
      })
    })
  }

}
