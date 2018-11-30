import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { ViewMemoriesComponent } from './view-memories/view-memories.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add-memory',
    component: AddMemoryComponent
  },
  {
    path: 'view-memories',
    component: ViewMemoriesComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
