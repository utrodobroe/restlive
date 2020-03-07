import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoReportComponent } from './components/photo-report/photo-report.component';
import { ShopComponent } from './components/shop/shop.component';
import { TopChefsComponent } from './components/top-chefs/top-chefs.component';
import { TopRestaurantsComponent } from './components/top-restaurants/top-restaurants.component';

const appRouts: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'topChefs', component: TopChefsComponent},
  {path:'photoReport', component: PhotoReportComponent},
  {path:'topRestaurants', component: TopRestaurantsComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoReportComponent,
    ShopComponent,
    TopChefsComponent,
    TopRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
