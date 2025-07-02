import { Routes } from '@angular/router';
import { CsUiComponent } from './pages/cs-ui/cs-ui.component';
import { CsUiAdminComponent } from './pages/cs-ui-admin/cs-ui-admin.component';
import { SoccerUiComponent } from './pages/soccer-ui/soccer-ui.component';
import { SoccerUiAdminComponent } from './pages/soccer-ui-admin/soccer-ui-admin.component';

export const routes: Routes = [
  { path: '', component: CsUiComponent },
  { path: 'admin', component: CsUiAdminComponent },
  { path: 'soccer', component: SoccerUiComponent },
  { path: 'soccer/admin', component: SoccerUiAdminComponent },
];
