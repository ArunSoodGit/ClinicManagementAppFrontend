import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ReservationComponent} from "./reservation/reservation.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LogoutComponent} from "./logout/logout.component";
import {DoctorsComponent} from "./doctors/doctors.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
  {path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuardService]},
  // {path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGaurdService]},
  // {path: 'cars/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'reservation', component: ReservationComponent, canActivate: [AuthGuardService] },
  // {path: 'rentals/:id', component: RentalDetailsComponent, canActivate: [AuthGaurdService] },
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
