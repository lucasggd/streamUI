import { Routes } from '@angular/router';
import { CsUiComponent } from './pages/cs-ui/cs-ui.component';
import { CsUiAdminComponent } from './pages/cs-ui-admin/cs-ui-admin.component';

export const routes: Routes = [
  { path: '', component: CsUiComponent },
  { path: 'admin', component: CsUiAdminComponent },
];
