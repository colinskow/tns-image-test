import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {Page} from "ui/page";
import {Image} from "ui/image";
import {RouteTestService} from "./route-test.service";
import {recycleImage} from "./recycle";

@Component({
  selector: "route-test-a",
  templateUrl: "test.html",
  directives: [NS_ROUTER_DIRECTIVES]
})
export class RouteTestAPage implements OnInit {
  src: string;
  passed: boolean;
  counter: number;

  constructor(private page: Page, private routeTestService: RouteTestService, 
      private _router: Router) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.src = "~/img/image01.jpg";
    this.routeTestService.increment();
    this.counter = this.routeTestService.count;
    this.passed = this.routeTestService.passed;
    if(!this.passed) {
      setTimeout(() => {
        this._router.navigate(["/routeTestB"]);
      }, 100)
    } else {
      this.routeTestService.reset();
    }
  }

  @ViewChild("image") imageElem: ElementRef;
}