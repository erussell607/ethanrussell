import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ViewMemoriesDataSource,
  ViewMemoriesItem
} from './view-memories-datasource';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
  displayedColumns = ['date', 'text', 'delete'];
  subscription: Subscription;

  // constructor(private db: AngularFireDatabase) {}

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  data: any;

  itemValue = '';

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('memories').valueChanges();
  }

  ngOnInit() {
    // I don't know what thiws ViewMemoriesItem thing is, but it seemed to complicate things so I didn't use it
    // this.subscription = this.db
    //   .list<ViewMemoriesItem>('memories')
    //   .valueChanges()
    //   .subscribe(d => {
    //     console.log('data streaming');
    //     this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);
    //     this.dataSource.data = d;
    //     console.log(d);
    //   });

    this.itemsRef = this.db.list('memories');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  private deleteMemory(memory) {
    console.log(memory);
    this.itemsRef.remove(memory.key);
  }

  ngOnDestroy(): void {
    // Not subscribing to anything anymore
    // this.subscription.unsubscribe();
  }
}
