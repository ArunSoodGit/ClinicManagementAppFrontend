import {Component} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../services/reservation.service";
import {Prescription} from "../../models/Prescription";
import {Doctor} from "../../models/Doctor";
import {Patient} from "../../models/Patient";
import {FormControl} from "@angular/forms";
import {MedicineService} from "../../services/medicine.service";
import {Medicine} from "../../models/Medicine";
import {Status} from "../../models/Status";

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent {

  visitDescription!: string;
  reservation!: Reservation;
  prescription!: Prescription;
  visit: string = 'Wizyta';
  patientPersonal: string = 'Dane osobowe pacjetna';
  doctorPersonal: string = 'Dane osobowe lekarza';
  visitDetails: string = 'Szczegóły wizyty';
  doctorDescription: string = 'Opis wywiadu';
  medicines: string = 'Leki';
  doctor!: Doctor;
  patient!: Patient;
  myControl = new FormControl();
  medicinesList: Medicine[] = [];
  selectedMedicines: Medicine[] = [];

  constructor(private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationService,
              private medicineService: MedicineService,
  ) {
    this.getReservation();

    this.medicineService.getMedicines().subscribe(medicine => this.medicinesList = medicine);
  }

  accept(): void {
    this.reservation.status = Status.FINISHED;
    this.reservation.description = this.visitDescription;
    this.prescription.medicines = this.selectedMedicines;
    this.reservation.prescription = this.prescription;
    this.reservationService.addReservation(this.reservation).subscribe(
      data => {
        this.router.navigate(['/reservations']);
      });
  }

  getReservation(): void {
    this.reservationService.getReservationById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(reservation => {
        this.reservation = reservation;
        this.visitDescription = reservation.description;
        this.doctor = reservation.doctor;
        this.patient = reservation.patient;
        console.log(this.reservation);
        if (reservation.prescription !== null) {
          this.prescription = reservation.prescription;
          this.selectedMedicines = this.prescription.medicines;

        } else {
          this.prescription = new Prescription();

        }
      })
  }

  addMedicine(medicine: Medicine, isSelected: boolean) {
    console.log(medicine);
    if (isSelected) {
      this.selectedMedicines.push(medicine);
    } else {
      let index = this.selectedMedicines.indexOf(medicine);
      this.selectedMedicines.splice(index, 1);
    }
  }
}
