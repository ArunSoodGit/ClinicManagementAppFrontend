import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  // {path: 'customers', component: AllCustomersComponent, canActivate: [AuthGaurdService]},
  // {path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGaurdService]},
  // {path: 'cars/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  // {path: 'cars', component: AllCarsComponent, canActivate: [AuthGaurdService] },
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
