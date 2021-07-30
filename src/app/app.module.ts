import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LikeWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
