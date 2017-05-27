import { Injectable } from '@angular/core';

import { Template } from '../Models/template';
//import { Templates } from '../Mocks/mock-templates';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {
    private apiUrl = "http://mahjongmayhem.herokuapp.com";

    constructor(private http: Http) {}

    getTemplates(): Observable<Template[]> {
        return this.http.get(this.apiUrl + "/gameTemplates")
                .map(this.extractData);
    }

    private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body || { };
  }
}