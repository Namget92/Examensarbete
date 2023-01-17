import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ChecklistComponent } from './checklist/checklist.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { NotSignedInComponent } from './not-signed-in/not-signed-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChecklistComponent,
    TopBarComponent,
    AboutComponent,
    NotSignedInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
