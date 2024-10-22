import { Routes } from '@angular/router';
import { RegistroModule } from './app/registro/registro.module';

export const routes: Routes = [
    {
        path: 'inicio',
        loadChildren: () => import('./app/inicio/inicio.module').then(m => m.InicioModule)
    },
    {
        path: 'registro',
        loadChildren: () => RegistroModule
    },
    {
        path: '**',
        redirectTo: 'inicio'
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
    

];
