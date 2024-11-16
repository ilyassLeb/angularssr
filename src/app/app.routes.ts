import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
    {
      path: '', // Route parent
      component: MainComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
        { path: 'home', component: HomeComponentComponent }, // Composant enfant
      ],
    },
    { path: '**', redirectTo: '' }, // Redirection pour URL inconnue
  ];
  