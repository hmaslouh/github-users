import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/users/user.component';
import { ShortenerUrlComponent } from './components/shortener-url/shortener-url.component';


const routes: Routes = [ 
  { path: '', component: UserComponent },
  { path: 'shortenerurl', component: ShortenerUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
