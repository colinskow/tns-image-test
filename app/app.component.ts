import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {RouteTestService} from "./route-test.service";
import {ImageService} from "./image.service";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>",
  providers: [ImageService, RouteTestService]
})
export class AppComponent {}