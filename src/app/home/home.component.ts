import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  memory: any = {};

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {}

  onSubmit() {}
}
