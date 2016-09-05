import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {Page} from "ui/page";
import {Image} from "ui/image";
import {RouteTestService} from "./route-test.service";
import {ImageService} from "./image.service";
import {recycleImage} from "./recycle";

@Component({
  selector: "route-test-a",
  templateUrl: "test.html",
  directives: [NS_ROUTER_DIRECTIVES]
})
export class RouteTestBase implements OnInit {

  src: any;
  navigateTo: string;
  passed: boolean;
  counter: number;

  constructor(private _router: Router, private page: Page, private routeTestService: RouteTestService, 
      protected imageService: ImageService) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.routeTestService.increment();
    this.counter = this.routeTestService.count;
    this.passed = this.routeTestService.passed;
    if(!this.passed) {
      setTimeout(() => {
        this._router.navigate([this.navigateTo]);
      }, 100)
    } else {
      this.routeTestService.reset();
    }
  }

  @ViewChild("image") imageElem: ElementRef;
}

export class RouteTestA extends RouteTestBase {
  // We are using a pre-loaded ImageSource to ensure it is not improperly recycled
  src = this.imageService.image;
  navigateTo = "/routeTestB";
}

export class RouteTestB extends RouteTestBase {
  src = "~/img/image02.jpg";
  navigateTo = "/routeTestC";
}

export class RouteTestC extends RouteTestBase {
  src = "~/img/image03.jpg";
  navigateTo = "/routeTestA";
}