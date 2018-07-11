import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { ErrorLogService } from './error-handling/error.log.service';
import { AppErrorHandler } from './error-handling/app.error.handler';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [ErrorLogService, { provide: ErrorHandler, useClass: AppErrorHandler }],

  bootstrap: [AppComponent]
})
export class AppModule {}
