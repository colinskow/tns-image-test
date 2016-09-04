import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {Page} from "ui/page";
import {Image} from "ui/image";
import {recycleImage} from "./recycle";

@Component({
  selector: "loop-test",
  templateUrl: "test.html",
  directives: [NS_ROUTER_DIRECTIVES]
})
export class LoopTestPage implements OnInit {
  src: string;
  counter: number = 0;
  index = 0;
  passed: boolean = false;

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.testLoop();
  }

  testLoop() {
    let loop = () => {
      // Uncomment this next line to make the test pass
      // recycleImage(this.imageElem);
      this.src = '~/img/' + ((this.index++) == 0 ? 'image01.jpg' : 'image02.jpg');
      if (this.index > 1) {
        this.index = 0;
      }
      this.counter++;
      if(this.counter < 500) {
        setTimeout(loop, 100);
      } else {
        this.passed = true;
        console.log('Loop Test Passed!');
      }
    }
    loop();
  }

  @ViewChild("image") imageElem: ElementRef;
}