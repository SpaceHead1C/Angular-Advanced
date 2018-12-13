import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDirective } from './01-attribute-directives/01-simple-directive/simple-directive.component';
import { MyColorDirective } from './01-attribute-directives/01-simple-directive/my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
