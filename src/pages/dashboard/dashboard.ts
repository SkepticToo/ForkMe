import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  dualValue: any;
  minRangeVal: number;
  maxRangeVal: number;
  steps: number;
  lowVal: number;
  highVal: number;
  midRangeVal: number;

  constructor() {
    this.minRangeVal = 0;
    this.maxRangeVal = 100;
    this.steps = 5;
    this.lowVal = this.minRangeVal;
    this.highVal = this.maxRangeVal
    this.midRangeVal = this.highVal / 2;
    this.dualValue = {lower: this.lowVal, upper: this.highVal};
  }

  updateRange(): void {
    this.dualValue = {lower: this.lowVal, upper: this.highVal};
  }

  adjustLowRange(val: number) {
    // need to ensure >= minRangeVal && <= midRangeVal
    this.lowVal += (val * this.steps);
    this.updateRange();
  }

  adjustHighRange(val: number) {
    // need to ensure <= maxRangeVal && >= midRangeVal
    this.highVal += (val * this.steps);
    this.updateRange();
  }
}
