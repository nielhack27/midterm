import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
