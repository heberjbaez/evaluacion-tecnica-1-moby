import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { ApiModuleModule } from './pages/api-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, ApiModuleModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
