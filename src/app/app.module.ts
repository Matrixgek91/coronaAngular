import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Components (pages)
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';

//Components (dialogs)
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegelsComponent } from './regels/regels.component';
import { CalendarTwoComponent } from './calendar-two/calendar-two.component';

//Services
import { ViaServiceComponent } from './via-service/via-service.component';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

//Materials components imports

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';







@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NewsFeedComponent,
    RegisterDialogComponent,
    RegisterFormComponent,
    LoginDialogComponent,
    LoginFormComponent,
    ViaServiceComponent,
    PageNotFoundComponent,
    RegelsComponent,
    CalendarTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    //Material imports
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
    //End of meterial imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
