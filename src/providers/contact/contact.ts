import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

}
