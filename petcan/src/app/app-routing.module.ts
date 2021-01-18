import { DestekComponent } from './components/destek/destek.component';
import { IletisimlerComponent } from './components/iletisimler/iletisimler.component';

import { YonetimComponent } from './components/yonetim/yonetim.component';
import { UrunlerimizComponent } from './components/urunlerimiz/urunlerimiz.component';

import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';




import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';




const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
    AnasayfaComponent,



  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: KayitlarComponent },
  { path: 'hakkimizda', component:HakkimizdaComponent},
  { path: 'iletisimler', component: IletisimlerComponent },
  { path: 'urunlerimiz', component: UrunlerimizComponent },
  { path: 'yonetim', component: YonetimComponent,canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },
  { path: 'destek', component: DestekComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
