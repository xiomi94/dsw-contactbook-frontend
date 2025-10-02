import { Component, input, output } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonButton } from "@ionic/angular/standalone";
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonButton
],
})
export class ContactItemComponent {

  contact = input.required<ContactModel>();
  deleteButtonClick = output<ContactModel>();

}
