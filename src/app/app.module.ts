import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent }  from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes = [
  { path:'', 
    component: HomeComponent, 
    outlet: 'primary', 
    children: [
    { path: '', 
      component: ContactsComponent, 
      outlet: 'secondary'
    }
  ]},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
