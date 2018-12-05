import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../core';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  memory: any = {};

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {}

  onSubmit() {
    this.memory.date = new Date(this.memory.date).valueOf();
    this.db
      .list('memories')
      .push(this.memory)
      .then(_ => {
        this.memory = {};
        console.log('success');
      });
  }
}
