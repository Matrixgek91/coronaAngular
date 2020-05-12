import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegelsComponent } from './regels/regels.component';
import { CalendarTwoComponent } from './calendar-two/calendar-two.component';
import { ShopComponent } from './shop/shop.component';
import { ProductListComponent } from './shop-components/product-list/product-list.component';
import { ProductDetailsComponent } from './shop-components/product-details/product-details.component';
import { AddProductComponent } from './shop-components/add-product/add-product.component';
import { ShoppingCartComponent } from './shop-components/shopping-cart/shopping-cart.component';

//end components

const routes: Routes = [
  {path: 'home', component: FrontPageComponent},
  {path: 'nieuws', component: NewsFeedComponent},
  {path: 'regels', component: RegelsComponent},
  {path: 'kalender', component: CalendarTwoComponent},
  {path: 'winkel', component: ShopComponent, 
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'cart', component: ShoppingCartComponent }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: FrontPageComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
