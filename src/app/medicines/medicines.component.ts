import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Doctor} from "../models/Doctor";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {DoctorService} from "../services/doctor.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveDoctorComponent} from "../remove-doctor/remove-doctor.component";
import {NewDoctorComponent} from "../new-doctor/new-doctor.component";
import {EditDoctorComponent} from "../edit-doctor/edit-doctor.component";
import {MedicineService} from "../services/medicine.service";
import {Medicine} from "../models/Medicine";
import {NewMedicineComponent} from "../new-medicine/new-medicine.component";
import {EditMedicineComponent} from "../edit-medicine/edit-medicine.component";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  displayedColumns: string[] = ['Zdjęcie', 'Nazwa', 'Producent', 'Dawka','Opakowanie', 'Cena', 'edit'];
  medicine?: Medicine;
  dataSource: any;
  customer:any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private medicineService: MedicineService, private dialog: MatDialog,
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
    this.medicineService.getMedicines().subscribe(medicine => {
        this.changeDetectorRefs.detectChanges();
        console.log(medicine);
        this.dataSource = new MatTableDataSource(medicine);
        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data:Medicine, filter:any) => {
          const dataStr = data.id + data.name + data.packet + data.price
            + data;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(medicine: Medicine): void {
    const dialogRef = this.dialog.open(RemoveDoctorComponent, {
      width: '480px',
      panelClass: 'icon-outside',
      data: medicine
    });
    dialogRef.afterClosed().subscribe(result => {

      this.medicine = medicine;
      this.refresh();
    });
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(NewMedicineComponent, {
      width: '480px',
      height: 'auto',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(medicine: Medicine): void {
    const dialogRef = this.dialog.open(EditMedicineComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: medicine
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.medicine = medicine;
    });
  }

  show(medicine: Medicine): void {
    this.router.navigate(['/medicines', medicine.id]);
  }


}
