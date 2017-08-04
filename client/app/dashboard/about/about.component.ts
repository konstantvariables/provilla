import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currentUser

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.currentUser = this.auth.currentUser;
  }
}
