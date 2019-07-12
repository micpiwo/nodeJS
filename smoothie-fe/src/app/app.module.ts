import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersComponent } from './users/users.component';
import { SmoothiesFormComponent } from './smoothies-form/smoothies-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SmoothiesComponent,
    DetailComponent,
    UsersComponent,
    SmoothiesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // composant material
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
