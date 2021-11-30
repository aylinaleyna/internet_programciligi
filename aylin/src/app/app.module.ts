import { DestekComponent } from './components/destek/destek.component';
import { YonetimComponent } from './components/yonetim/yonetim.component';
import { UrunlerimizComponent } from './components/urunlerimiz/urunlerimiz.component';

import { IletisimlerComponent } from './components/iletisimler/iletisimler.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';



import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { YardimComponent } from './components/yardim/yardim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { AnketComponent } from './components/anket/anket.component';








@NgModule({
  declarations: [
    AppComponent,
    YonetimComponent,
    LoginComponent,
    KayitlarComponent,
    UrunlerimizComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    AnasayfaComponent,
    HakkimizdaComponent,
    IletisimlerComponent,
    YardimComponent,
    DestekComponent,
    AnketComponent,
    
   











  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
