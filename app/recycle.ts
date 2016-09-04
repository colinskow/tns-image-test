import {Image} from "ui/image";

export function recycleImage(imageElement) {
    // Release the bitmap from memory so it can be garbage collected
    // From: http://stackoverflow.com/questions/10200256/out-of-memory-error-imageview-issue
    let image: Image = imageElement.nativeElement;
    if(image && image.android) {
      let drawable = image.android.getDrawable();
      if(drawable) {
        drawable.getBitmap().recycle();
      }
    }
  }