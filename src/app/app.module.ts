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
import { FooterComponent } from './footer/footer.component';
import { ElgamalComponent } from './elgamal/elgamal.component';
import { BabyGiantComponent } from './baby-giant/baby-giant.component';
import { PohligComponent } from './pohlig/pohlig.component';
import { MillerComponent } from './miller/miller.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

const appRoute: Routes = [
  {path: '', component: PrincipalPageComponent },
  {path: 'historia', component: HistoryComponent },
  {path: 'caesar', component: CaesarComponent },
  {path: 'elgamal', component: ElgamalComponent },
  {path: 'babyGiant', component: BabyGiantComponent },
  {path: 'pohlig', component: PohligComponent },
  {path: 'miller', component: MillerComponent },
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
    PrincipalPageComponent,
    FooterComponent,
    ElgamalComponent,
    BabyGiantComponent,
    PohligComponent,
    MillerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute,{
      scrollPositionRestoration: 'enabled'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
