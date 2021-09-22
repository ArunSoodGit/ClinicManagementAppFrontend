import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService, User} from "../services/authentication.service";
import {UserService} from "../services/user.service";
import {Role} from "../models/Role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  currentDate: string = "";
  currentUser!: string | null;
  user!: User;
  Role = Role;
  isAdmin: boolean = false;

  constructor(public authenticationService: AuthenticationService, private userService: UserService) {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();



  }

  // get isAdmin() {
  //   // return this.currentUser && this.currentUser.role === Role.Admin;
  // }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
