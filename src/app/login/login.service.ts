import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class LoginService {
	// tslint:disable:indent
	logonUrl = environment.apiUrl + 'logon';
	constructor(private http: HttpClient) { }
	public logon() {
		let params = new HttpParams();
		params = params.set('toolName', 'Spark Initiatives');
		const cookie = {};
		cookie['attESSec'] = this.getCookie('attESSec');
		cookie['attESHr'] = this.getCookie('attESHr');
		params = params.set('cookie', JSON.stringify(cookie));
		return this.http.get(this.logonUrl, {params: params});
	}
	private getCookie(cname) {
		const name = cname + '=';
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}
}
