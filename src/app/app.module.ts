import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HistoryComponent } from './history/history.component';
import { CaesarComponent } from './caesar/caesar.component';
import { RsaComponent } from './rsa/rsa.component';
import { DiffieHellmanComponent } from './diffie-hellman/diffie-hellman.component';
import { RouterModule, Routes } from '@angular/router';


const appRoute: Routes = [
  {path: '', component: AppComponent },
  {path: 'historia', component: HistoryComponent },
  {path: 'caesar', component: CaesarComponent },
  {path: 'rsa', component: RsaComponent },
  {path: 'diffie', component: DiffieHellmanComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HistoryComponent,
    CaesarComponent,
    RsaComponent,
    DiffieHellmanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
