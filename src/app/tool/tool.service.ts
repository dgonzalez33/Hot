import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ToolService {
	// tslint:disable:indent
    toolsUrl = environment.apiUrl + 'hot/tool';
    commentsUrl = environment.apiUrl + 'hot/tool/comments';
    filterUrl = environment.apiUrl + 'hot/tool/filtered';
    constructor(private http: HttpClient) { }
    public filterTools(filter, fuzzy): Observable<Object> {
        let params = new HttpParams();
        params = params.set('category', filter.category === undefined ? '' : filter.category);
        params = params.set('department', filter.department === undefined ? '' : filter.department);
        params = params.set('price', filter.price === undefined ? '' : filter.price);
        params = params.set('fuzzy', fuzzy === undefined ? '' : fuzzy);
        return this.http.get(this.filterUrl, {params: params});
    }
    public getAllTools() {
        return this.http.get(this.toolsUrl);
    }
    public getTool(toolId): Observable<Object> {
        let params = new HttpParams();
        params = params.set('id', toolId);
        return this.http.get(this.toolsUrl, {params: params});
    }
    public getComments(toolId) {
        let params = new HttpParams();
        params = params.set('tool_id', toolId);
        return this.http.get(this.commentsUrl, {params: params});
    }
    public addComment(comment, toolId, attuid){
        let params = new HttpParams();
        params = params.set('tool_id', toolId);
        params = params.set('comment', comment);
        params = params.set('attuid', attuid);
        return this.http.post(this.commentsUrl, {params: params});
    }
}