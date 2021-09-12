import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Medicine} from "../../models/Medicine";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {MedicineService} from "../../services/medicine.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveDoctorComponent} from "../../doctor/remove-doctor/remove-doctor.component";
import {NewDoctorComponent} from "../../doctor/new-doctor/new-doctor.component";
import {EditDoctorComponent} from "../../doctor/edit-doctor/edit-doctor.component";
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../models/Reservation";
import {NewReservationComponent} from "../new-reservation/new-reservation.component";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  displayedColumns: string[] = ['Zdjęcie', 'Pacjent', 'Lekarz', 'Data','Status', 'edit'];
  reservation?: Reservation;
  dataSource: any;
  customer:any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private reservationService: ReservationService, private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.refresh();
  }


  applyFilter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }


  refresh(): void {
    this.reservationService.getReservations().subscribe(reservation => {
        this.changeDetectorRefs.detectChanges();
        console.log(reservation);
        this.dataSource = new MatTableDataSource(reservation);
        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data:Reservation, filter:any) => {
          const dataStr = data.id + data.patient.name + data.doctor.name + data.doctor.surname
            + data.patient.surname;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(reservation: Reservation): void {
    const dialogRef = this.dialog.open(RemoveDoctorComponent, {
      width: '480px',
      panelClass: 'icon-outside',
      data: reservation
    });
    dialogRef.afterClosed().subscribe(result => {

      this.reservation = reservation;
      this.refresh();
    });
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(NewReservationComponent, {
      width: '480px',
      height: 'auto',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(reservation: Reservation): void {
    const dialogRef = this.dialog.open(EditDoctorComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: reservation
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.reservation = reservation;
    });
  }

  show(reservation: Reservation): void {
    this.router.navigate(['/reservations', reservation.id]);
  }


}
