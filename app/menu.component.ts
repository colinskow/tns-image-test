import {Component, OnInit} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {Page} from "ui/page";

@Component({
  selector: "my-app",
  template: `
        <GridLayout rows="*, auto, *" columns="*" backgroundColor="black">
            <StackLayout class="menu" row="1">
              <Button text="Loop Test" [nsRouterLink]="['/loopTest']"></Button>
              <Button text="Router Test" [nsRouterLink]="['/routeTestA']"></Button>
            </StackLayout>
        </GridLayout>
    `,
    directives: [NS_ROUTER_DIRECTIVES]
})
export class MenuPage implements OnInit {

    constructor(private page: Page) {}

    ngOnInit() {
        console.log('loaded!');
        this.page.actionBarHidden = true;
    }
}