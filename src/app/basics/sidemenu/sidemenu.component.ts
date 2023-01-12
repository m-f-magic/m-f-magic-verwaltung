import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SiteHandlerService } from '../site-handler.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  appPages: any;

  constructor(
    private siteHandler: SiteHandlerService
  ) {
    this.appPages = siteHandler.getAppPages();

    console.log(this.appPages);
   }

  ngOnInit() {}

}
