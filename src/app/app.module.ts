import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HistoryComponent } from './history/history.component';
import { CaesarComponent } from './caesar/caesar.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { FooterComponent } from './footer/footer.component';
import { ElgamalComponent } from './elgamal/elgamal.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoute: Routes = [
  {path: '', component: PrincipalPageComponent },
  {path: 'historia', component: HistoryComponent },
  {path: 'caesar', component: CaesarComponent },
  {path: 'elgamal', component: ElgamalComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'gallery', component: GalleryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HistoryComponent,
    CaesarComponent,
    PrincipalPageComponent,
    FooterComponent,
    ElgamalComponent,
    ContactComponent,
    GalleryComponent
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
