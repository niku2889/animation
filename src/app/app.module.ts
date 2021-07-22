import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDataComponent } from './pages/table-data/table-data.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThreeSixtyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
