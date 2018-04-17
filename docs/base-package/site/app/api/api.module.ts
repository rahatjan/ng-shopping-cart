import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';

import {routes} from './routes';
import { SearchComponent } from './routes/search.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  declarations: [SearchComponent],
  exports: []
})
export class ApiModule {
}