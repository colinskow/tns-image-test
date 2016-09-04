import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Page} from "ui/page";
import {Image} from "ui/image";

@Component({
  selector: "my-app",
  template: `
        <DockLayout>
            <Label [text]="msg || counter" color="white" backgroundColor="black" 
              textAlignment="center" width="100%" height="64" fontSize="48" dock="bottom"></Label>
            <Image #image src="{{src}}" stretch="aspectFill" dock="top"></Image>
        </DockLayout>
    `
})
export class AppComponent implements OnInit {
  src;
  counter: number = 0;
  msg: string = '';
  index = 0;

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.testLoop();
  }

  testLoop() {
    let loop = () => {
      // Uncomment this next line to make the test pass
      // this.recycleImage();
      this.src = '~/img/' + ((this.index++) == 0 ? 'image01.jpg' : 'image02.jpg');
      if (this.index > 1) {
        this.index = 0;
      }
      this.counter++;
      if(this.counter < 500) {
        setTimeout(loop, 100);
      } else {
        this.msg = "TEST PASSED!"
      }
      console.log(this.counter);
    }
    loop();
  }

  recycleImage() {
    // Release the bitmap from memory so it can be garbage collected
    // From: http://stackoverflow.com/questions/10200256/out-of-memory-error-imageview-issue
    let image: Image = this.imageElem.nativeElement;
    if(image && image.android) {
      let drawable = image.android.getDrawable();
      if(drawable) {
        drawable.getBitmap().recycle();
      }
    }
  }

  @ViewChild("image") imageElem: ElementRef;
}