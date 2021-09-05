import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ReservationDetailComponent} from "./reservation/reservation-detail/reservation-detail.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LogoutComponent} from "./logout/logout.component";
import {DoctorsComponent} from "./doctor/doctors/doctors.component";
import {DoctorDetailComponent} from "./doctor/doctor-detail/doctor-detail.component";
import {PatientsComponent} from "./patient/patients/patients.component";
import {PatientDetailComponent} from "./patient/patient-detail/patient-detail.component";
import {MedicineDetailComponent} from "./medicine-detail/medicine-detail.component";
import {ReservationMedicinesComponent} from "./reservation/reservation-medicines/reservation-medicines.component";
import {ReservationDetailInfoComponent} from "./reservation/reservation-detail-info/reservation-detail-info.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {MedicinesComponent} from "./medicines/medicines.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
  {path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuardService]},
   {path: 'doctors/:id', component: DoctorDetailComponent, canActivate: [AuthGuardService]},
  {path: 'patients', component: PatientsComponent, canActivate: [AuthGuardService]},
  {path: 'patients/:id', component: PatientDetailComponent, canActivate: [AuthGuardService]},
  {path: 'reservations', component: ReservationsComponent, canActivate: [AuthGuardService] },
  {path: 'reservations/:id', component: ReservationDetailComponent, canActivate: [AuthGuardService] },
  {path: 'medicines', component: MedicinesComponent, canActivate: [AuthGuardService] },
  {path: 'reservation-medicines/:id', component: MedicineDetailComponent, canActivate: [AuthGuardService] },
  // {path: 'rentals', component: AllRentalsComponent, canActivate: [AuthGaurdService] },
  // {path: 'editCar', component: EditCarComponent, canActivate: [AuthGaurdService] },
  // {path: 'editCustomer', component: EditCustomerComponent, canActivate: [AuthGaurdService] },
  // {path: 'editRental', component: EditRentalComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
