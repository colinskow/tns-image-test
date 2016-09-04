import {Injectable} from "@angular/core";

@Injectable()
export class RouteTestService {

  count: number;
  passed: boolean;

  constructor() {
    this.reset();
  }

  reset() {
    this.count = 0;
    this.passed = false;
  }

  increment() {
    this.count ++;
    if(this.count > 500) {
      this.passed = true;
      console.log('Route Test Passed!');
    }
  }

}