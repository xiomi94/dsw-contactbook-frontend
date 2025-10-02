import { Component, input } from '@angular/core';
import { ContactItemComponent } from "../contact-item/contact-item.component";
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  imports: [ContactItemComponent],
})
export class ContactListComponent {

  contacts = input.required<ContactModel[]>()

}
