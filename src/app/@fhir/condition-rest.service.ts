import { RestService } from './rest.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConditionRestService extends RestService {

  constructor(injector: Injector) {
    super('Condition', injector);
  }
}
