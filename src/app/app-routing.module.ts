import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//end components

const routes: Routes = [
  {path: 'frontpage', component: FrontPageComponent},
  {path: 'news', component: NewsFeedComponent},
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: '**', component: FrontPageComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
