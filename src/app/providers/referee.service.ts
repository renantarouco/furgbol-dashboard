import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
import { Referee } from '../interfaces/referee';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor() {}

  get referee$(): Observable<Referee> {
    return webSocket("http://localhost:9002").pipe(
      map(msg => msg as Referee)
    );
  }

}
