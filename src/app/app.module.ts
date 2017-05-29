import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, routingComponents } from './app.routing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StudentModule } from './student/student.module';
import { HighlightDirective } from './main/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    routingComponents,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StudentModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
