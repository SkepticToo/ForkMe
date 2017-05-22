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
    this.highVal = this.maxRangeVal;
    this.midRangeVal = this.highVal / 2;
    this.dualValue = {lower: this.lowVal, upper: this.highVal};
  }

  updateRange(): void {
    if (this.lowVal < 0) {
      this.lowVal = 0;
    }
    if (this.highVal > 100) {
      this.highVal = 100;
    }

    this.dualValue = {lower: this.lowVal, upper: this.highVal};
  }

  handleChange(): void {
    this.lowVal = this.dualValue.lower;
    this.highVal = this.dualValue.upper;
  }

  adjustLowRange(val: number) {
    this.lowVal += (val * this.steps);
    this.updateRange();
  }

  adjustHighRange(val: number) {
    this.highVal += (val * this.steps);
    this.updateRange();
  }
}
