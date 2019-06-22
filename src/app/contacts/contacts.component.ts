import { Component } from "@angular/core";
import { DataService} from '../data.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    providers: [DataService],
})
export class ContactsComponent {
    contacts: any;
    constructor(private data: DataService){
        this.data.getContacts().subscribe(data => {
            this.contacts = data.json();
            console.log(data.json());
        })
    }
}