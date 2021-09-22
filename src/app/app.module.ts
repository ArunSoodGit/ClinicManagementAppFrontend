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
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { DoctorsComponent } from './doctor/doctors/doctors.component';
import { PatientsComponent } from './patient/patients/patients.component';
import { DoctorDetailComponent } from './doctor/doctor-detail/doctor-detail.component';
import { DoctorPersonalDataComponent } from './doctor/doctor-personal-data/doctor-personal-data.component';
import { PatientPersonalDataComponent } from './patient/patient-personal-data/patient-personal-data.component';
import { ReservationDetailInfoComponent } from './reservation/reservation-detail-info/reservation-detail-info.component';
import { ReservationDoctorDescriptionComponent } from './reservation/reservation-doctor-description/reservation-doctor-description.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { ReservationMedicinesComponent } from './reservation/reservation-medicines/reservation-medicines.component';
import { MedicineDetailComponent } from './medicine/medicine-detail/medicine-detail.component';
import { ReservationsComponent } from './reservation/reservations/reservations.component';
import { NewDoctorComponent } from './doctor/new-doctor/new-doctor.component';
import { RemoveDoctorComponent } from './doctor/remove-doctor/remove-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { MedicinesComponent } from './medicine/medicines/medicines.component';
import { NewMedicineComponent } from './medicine/new-medicine/new-medicine.component';
import { EditMedicineComponent } from './medicine/edit-medicine/edit-medicine.component';
import { NewReservationComponent } from './reservation/new-reservation/new-reservation.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { EditPatientComponent } from './patient/edit-patient/edit-patient.component';
import { RemovePatientComponent } from './patient/remove-patient/remove-patient.component';
import { RemoveMedicineComponent } from './medicine/remove-medicine/remove-medicine.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { HomeComponent } from './home/home.component';
import { RemoveReservationComponent } from './reservation/remove-reservation/remove-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    ReservationDetailComponent,
    LogoutComponent,
    DoctorsComponent,
    PatientsComponent,
    DoctorDetailComponent,
    DoctorPersonalDataComponent,
    PatientPersonalDataComponent,
    ReservationDetailInfoComponent,
    ReservationDoctorDescriptionComponent,
    PatientDetailComponent,
    ReservationMedicinesComponent,
    MedicineDetailComponent,
    ReservationsComponent,
    NewDoctorComponent,
    RemoveDoctorComponent,
    EditDoctorComponent,
    MedicinesComponent,
    NewMedicineComponent,
    EditMedicineComponent,
    NewReservationComponent,
    NewPatientComponent,
    EditPatientComponent,
    RemovePatientComponent,
    RemoveMedicineComponent,
    HomeComponent,
    RemoveReservationComponent,

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
    MatAutocompleteModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
