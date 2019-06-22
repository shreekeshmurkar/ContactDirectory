import { Injectable } from "@angular/core";
import { Http} from "@angular/http";

@Injectable()
export class DataService {

    constructor(private http: Http) {

    }

    getContacts(){
        return this.http.get('app/contacts.json');
    }

}