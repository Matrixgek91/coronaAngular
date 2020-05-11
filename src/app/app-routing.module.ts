import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegelsComponent } from './regels/regels.component';
import { CalendarTwoComponent } from './calendar-two/calendar-two.component';

//end components

const routes: Routes = [
  {path: 'home', component: FrontPageComponent},
  {path: 'nieuws', component: NewsFeedComponent},
  {path: 'regels', component: RegelsComponent},
  {path: 'kalender', component: CalendarTwoComponent},
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
