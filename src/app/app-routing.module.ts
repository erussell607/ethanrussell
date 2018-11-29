import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { ViewMemoriesComponent } from './view-memories/view-memories.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
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
