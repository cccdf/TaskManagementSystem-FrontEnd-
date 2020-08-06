import { User } from './../../shared/models/User';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService:ApiService
  ) { }

  getAllUsers():Observable<User[]>{
    return this.apiService.getAll('user/users');
  }
}
