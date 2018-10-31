import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})
export class LoginComponent implements OnInit {
  message = 'Logging in..';
  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.loginService.logon().subscribe(resp => {
    //   if ( !resp ) {
    //     window.location.href = 'https://www.e-access.att.com/empsvcs/hrpinmgt/pagLogin/?sysName=usrp&retURL=' + window.location.href;
    //   } else {
    //     localStorage.setItem('attuid', resp['attuid']);
    //     localStorage.setItem('firstName', resp['firstName']);
    //     localStorage.setItem('lastName', resp['lastName']);
    //     localStorage.setItem('roles', JSON.stringify(resp['roles']));
    //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //     this.router.navigateByUrl(returnUrl);
    //   }
    // });
    localStorage.setItem('attuid', 'dg978t');
    localStorage.setItem('firstName', 'David');
    localStorage.setItem('lastName', 'Gonzalez');
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl);
  }

}
