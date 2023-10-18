import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HistoryComponent } from './history/history.component';
import { CaesarComponent } from './caesar/caesar.component';
import { RsaComponent } from './rsa/rsa.component';
import { DiffieHellmanComponent } from './diffie-hellman/diffie-hellman.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';


const appRoute: Routes = [
  {path: '', component: PrincipalPageComponent },
  {path: 'historia', component: HistoryComponent },
  {path: 'caesar', component: CaesarComponent },
  {path: 'diffie', component: DiffieHellmanComponent },
  {path: 'rsa', component: RsaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HistoryComponent,
    CaesarComponent,
    RsaComponent,
    DiffieHellmanComponent,
    PrincipalPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
