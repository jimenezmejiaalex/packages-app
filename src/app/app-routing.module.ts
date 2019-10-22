import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'packages',
    pathMatch: 'full'
  },
  {path: 'packages', loadChildren: './packages/packages.module#PackagesPageModule'},
  {path: 'package-info', loadChildren: './packages-info/packages-info.module#PackagesInfoPageModule'},
  {path: 'modal-login', loadChildren: './modal-login/modal-login.module#ModalLoginPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
