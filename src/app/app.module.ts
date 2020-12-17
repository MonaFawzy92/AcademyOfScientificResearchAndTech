import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// components
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddOrderComponent } from './admin/components/add-order/add-order.component';
import { GenerateCodeComponent } from './user/components/generate-code/generate-code.component';
import { OrdersListComponent } from './user/components/generate-code/components/orders-list/orders-list.component';

//general modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular module
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from './shared/main-nav/main-nav/main-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    GenerateCodeComponent,
    OrdersListComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // angular module
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
