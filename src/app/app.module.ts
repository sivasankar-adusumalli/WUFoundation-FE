import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WufoundtionComponent } from './wufoundtion/wufoundtion.component';
import { WufoundationService} from './wufoundation.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WufoundtionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WufoundationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
