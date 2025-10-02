import { Component, signal } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ContactListComponent } from "src/app/components/contact-list/contact-list.component";
import { ContactModel } from 'src/app/models/contact.model';

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
export class HomePage {

  contacts = signal<ContactModel[]>([
    {
      name: 'Alonso Vazquez',
      phoneNumber: '123456789',
      email: 'alonso@gmail.com'
    },
    {
      name: 'Xiomara Jiménez',
      phoneNumber: '658663494',
      email: 'xiomara@gmail.com'
    },
    {
      name: 'Angel LaLlave',
      phoneNumber: '987654321',
      email: 'angel@gmail.com'
    },
    {
      name: 'Estrella Velázquez',
      phoneNumber: '789456123',
      email: 'estrella#gmail.com'
    }
  ]);

}
