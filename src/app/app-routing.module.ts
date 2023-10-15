import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  




  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'update_annonce/:id',
    loadChildren: () => import('./annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'announce-form',
    loadChildren: () => import('./announce-form/announce-form.module').then( m => m.AnnounceFormPageModule)
  },
  {
    path: 'announce-details/:id',
    loadChildren: () => import('./announce-details/announce-details.module').then( m => m.AnnounceDetailsPageModule)
  },
  {
    path: 'my-announces',
    loadChildren: () => import('./my-announces/my-announces.module').then( m => m.MyAnnouncesPageModule)
  },  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
