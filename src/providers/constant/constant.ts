import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }
// Live Url
  public rootUrl: string = 'https://apps.abacusdesk.com/interlightbattery/dd_api/';  
  public upload_url: string ='https://apps.abacusdesk.com/interlightbattery/dd_api/app/uploads/';

  // Testing url

  // public rootUrl: string = 'https://devcrm.abacusdesk.com/interlightbattery/dd_api/';  
  // public upload_url: string ='https://devcrm.abacusdesk.com/interlightbattery/dd_api/app/uploads/';
  public server_url: string = this.rootUrl + 'index.php/app/';


  


  public backButton = 0;

}
