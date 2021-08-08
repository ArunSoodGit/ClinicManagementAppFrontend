import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pl';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {DatePipe} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './reservation/reservation.component';
import { LogoutComponent } from './logout/logout.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { MedicineComponent } from './medicine/medicine.component';
import { DoctorPersonalDataComponent } from './doctor-personal-data/doctor-personal-data.component';
import { PatientPersonalDataComponent } from './patient-personal-data/patient-personal-data.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationDoctorDescriptionComponent } from './reservation-doctor-description/reservation-doctor-description.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    ReservationComponent,
    LogoutComponent,
    DoctorsComponent,
    PatientComponent,
    DoctorDetailComponent,
    MedicineComponent,
    DoctorPersonalDataComponent,
    PatientPersonalDataComponent,
    ReservationDetailsComponent,
    ReservationDoctorDescriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
