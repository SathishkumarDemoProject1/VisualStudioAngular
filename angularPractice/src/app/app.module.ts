import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChiledTagComponent } from './chiled-tag/chiled-tag.component';
import { SeviceService } from './sevice.service'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ChiledTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
