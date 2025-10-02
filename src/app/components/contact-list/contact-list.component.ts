import { Component } from '@angular/core';
import { ContactItemComponent } from "../contact-item/contact-item.component";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  imports: [ContactItemComponent],
})
export class ContactListComponent {



}
