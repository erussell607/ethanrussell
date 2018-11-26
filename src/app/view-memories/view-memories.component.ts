import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { Subscription, Observable } from 'rxjs';

import {
  ViewMemoriesDataSource,
  ViewMemoriesItem
} from './view-memories-datasource';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-view-memories',
  templateUrl: './view-memories.component.html',
  styleUrls: ['./view-memories.component.scss']
})
export class ViewMemoriesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewMemoriesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'text', 'key', 'delete'];
  subscription: Subscription;

  // constructor(private db: AngularFireDatabase) {}

  items: Observable<any[]>;

  itemValue = '';

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('memories').valueChanges();
  }

  ngOnInit() {
    this.subscription = this.db
      .list<ViewMemoriesItem>('memories')
      .valueChanges()
      .subscribe(d => {
        console.log('data streaming');
        this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);
        this.dataSource.data = d;
      });
  }

  private deleteMemory(memory) {
    // return this.db.list('memories/' + memory).remove();

    // this.db.database.ref.remove(memory);
    // const itemRef = this.db.object( memory);

    // itemRef.remove();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
