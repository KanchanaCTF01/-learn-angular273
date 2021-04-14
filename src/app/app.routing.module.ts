import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  {
    path: '', component: SideNavComponent,
    children: [
      { path: 'app', loadChildren: './menu/menu.module#MenuModule' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [MenuModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
