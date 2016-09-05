import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {Page} from "ui/page";
import {Image} from "ui/image";
import {recycleImage} from "./recycle";
import {ImageService} from "./image.service";

@Component({
  selector: "loop-test",
  templateUrl: "test.html",
  directives: [NS_ROUTER_DIRECTIVES]
})
export class LoopTestPage implements OnInit {
  src: any;
  counter: number = 0;
  passed: boolean = false;

  constructor(private page: Page, protected imageService: ImageService) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.testLoop();
  }

  testLoop() {
    let loop = () => {
      var index: number = this.counter % 3;
      // Uncomment this next block to make the test pass
      // Note: we don't want to recycle the native image (index 0) since it is reused.
      /* if(index > 0) {
        recycleImage(this.imageElem);
      } */
      switch(index) {
        case 0:
          // We are including a pre-loaded image in the test to make sure it is never 
          // recycled by the Image component
          this.src = this.imageService.image;
          break;
        case 1:
          this.src = '~/img/image02.jpg';
          break;
        case 2:
          this.src = '~/img/image03.jpg';
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