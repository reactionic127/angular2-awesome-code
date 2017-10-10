import { Route } from '@angular/router';
import { IdentifyComponent } from './index';

export const IdentifyRoutes: Route[] = [
  {
    path: 'identify/:id',
    component: IdentifyComponent
  },
  {
    path: 'identify_retry/:id',
    component: IdentifyComponent
  },
  {
    path: 'identify_odometer/:id',
    component: IdentifyComponent
  },
  {
    path: 'confirm_odometer/:id',
    component: IdentifyComponent
  }
];
