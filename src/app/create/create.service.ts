import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CreateService {
	// tslint:disable:indent
    employeeUrl = environment.apiUrl + 'employee';
    createUrl = environment.apiUrl + 'hot/tool';
    constructor(private http: HttpClient) { }
    public getEmployee(attuid): Observable<Object> {
        let params = new HttpParams();
        params = params.set('attuid', attuid);
        return this.http.get(this.employeeUrl, {params: params});
    }
    public createTool(toolForm: Object) {
        const formData: FormData = new FormData();
        for (const key of Object.keys(toolForm)) {
            if (key === 'attachment') {
                if (toolForm[key].value) {
                    formData.append(key, toolForm[key].value);
                    formData.append('attachmentName', toolForm[key].filename);
                }
            } else {
                formData.append(key, toolForm[key]);
            }
        }
        return this.http.post(this.createUrl, formData);
    }
}
