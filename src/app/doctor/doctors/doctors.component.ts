import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {Doctor} from "../../models/Doctor";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DoctorService} from "../../services/doctor.service";
import {NewDoctorComponent} from "../new-doctor/new-doctor.component";
import {RemoveDoctorComponent} from "../remove-doctor/remove-doctor.component";
import {EditDoctorComponent} from "../edit-doctor/edit-doctor.component";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  displayedColumns: string[] = ['Zdjęcie', 'Imie', 'Nazwisko', 'Telefon','Gabinet', 'Specjalizacja', 'edit'];
  doctor?: Doctor;
  dataSource: any;
  customer:any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private doctorService: DoctorService, private dialog: MatDialog,
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
    this.doctorService.getDoctors().subscribe(doctor => {
        this.changeDetectorRefs.detectChanges();
        console.log(doctor);
        this.dataSource = new MatTableDataSource(doctor);
        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data:Doctor, filter:any) => {
          const dataStr = data.id + data.name + data.surname + data.phone
             + data.room.number + data.specialization.name;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(doctor: Doctor): void {
    const dialogRef = this.dialog.open(RemoveDoctorComponent, {
      width: '480px',
      panelClass: 'icon-outside',
      data: doctor
    });
    dialogRef.afterClosed().subscribe(result => {

      this.doctor = doctor;
      this.refresh();
    });
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(NewDoctorComponent, {
      width: '480px',
      height: 'auto',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(doctor: Doctor): void {
    const dialogRef = this.dialog.open(EditDoctorComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: doctor
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.doctor = doctor;
    });
  }

  show(element: Doctor): void {
     this.router.navigate(['/doctors', element.id]);
  }


}
