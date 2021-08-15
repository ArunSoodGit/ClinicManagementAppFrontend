import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Doctor} from "../../models/Doctor";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {PatientService} from "../../patient.service";
import {Patient} from "../../models/Patient";

@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  displayedColumns: string[] = ['Zdjęcie', 'Imie', 'Nazwisko', 'Telefon','Pesel', 'edit'];
  patient?: Patient;
  dataSource: any;
  customer:any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private patientService: PatientService, private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.refresh();
  }


  applyFilter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }


  refresh(): void {
    this.patientService.getPatients().subscribe(patient => {
        this.changeDetectorRefs.detectChanges();
        console.log(patient);
        this.dataSource = new MatTableDataSource(patient);
        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data:Patient, filter:any) => {
          const dataStr = data.id + data.name + data.surname + data.phone
            + data.pesel;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(doctor: Doctor): void {
    // const dialogRef = this.dialog.open(RemoveCarComponent, {
    //   width: '480px',
    //   panelClass: 'icon-outside',
    //   data: car
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //
    //   this.car = car;
    //   this.refresh();
    // });
  }

  addPatient(): void {
    // const dialogRef = this.dialog.open(NewCarComponent, {
    //   width: '480px',
    //   height: 'auto',
    //   panelClass: 'icon-outside',
    // }).afterClosed().subscribe(result => {
    //   this.refresh();
    // });
  }

  onEdit(doctor: Doctor): void {
    // const dialogRef = this.dialog.open(EditCarComponent, {
    //   width: '500px',
    //   panelClass: 'icon-outside',
    //   data: car
    // }).afterClosed().subscribe(result => {
    //   this.refresh();
    //   this.car = car;
    // });
  }

  show(patient: Patient): void {
    this.router.navigate(['/patients', patient.id]);
  }


}
