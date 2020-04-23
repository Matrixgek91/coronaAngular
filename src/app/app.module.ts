import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';

/* Materials components imports */

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


/* End materials imports */


/*const appRoutes: Routes = [

]*/

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NewsFeedComponent
  ],
  imports: [
    // Routing
    /*RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //<-- Debugging only!
    ),*/
    // End of Routing
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Material imports
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
    //End of meterial imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
