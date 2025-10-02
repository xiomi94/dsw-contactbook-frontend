import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class Backend {

  http = inject(HttpClient);
  readonly BACKEND_URL = 'http://localhost:8080/api';

  getContacts(): Observable<ContactModel[]> {
    const url = `${this.BACKEND_URL}/contacts`;

    return this.http.get<ContactModel[]>(url);
  }

  deleteContact(id: number): Observable<any> {
    const url = `${this.BACKEND_URL}/contacts/${id}`;

    return this.http.delete(url);
  }
}
