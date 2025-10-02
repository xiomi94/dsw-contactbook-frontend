import { Component, inject, OnInit, signal } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ContactListComponent } from "src/app/components/contact-list/contact-list.component";
import { ContactModel } from 'src/app/models/contact.model';
import { Backend } from 'src/app/services/backend';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    ContactListComponent
  ],
})
export class HomePage implements OnInit {

  contacts = signal<ContactModel[]>([]);
  backend = inject(Backend);

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

}
