import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';

//end components

const routes: Routes = [
  {path: 'frontpage', component: FrontPageComponent},
  {path: 'news', component: NewsFeedComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
