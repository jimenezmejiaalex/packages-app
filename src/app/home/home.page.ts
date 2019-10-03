import {Component, OnInit} from '@angular/core';
import {PackagesService} from '../packages/api/packages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public dataService: PackagesService, private router: Router) {
    this.checkData();
  }

  async gotoPackagesList() {
    await this.dataService.dataStartDay();
    this.router.navigate(['packages']);
  }

  async checkData() {
    if (await this.dataService.existData() === true) {
      this.dataService.continueMyday();
      this.router.navigate(['packages']);
    }
  }

  async ngOnInit() {
    await this.checkData();
  }

}
