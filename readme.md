## NativeScript Android Memory Leak on Image Component

This contains two tests which confirm memory leak bugs in NativeScript/Android when swapping between two images or changing routes among image intensive pages.

### How To Run

```bash
git clone https://github.com/colinskow/tns-image-test.git
cd tns-image-test
tns platform add android
tns run android
```

### How To Make the Loop Test Pass

Simply comment out the `recycleImage(this.imageElem);` line in `loop-test.component.ts`.

### Solution

When the image component loads an image from a file, resource or URL it must recycle the Android bitmap when the image unloads or source changes. Otherwise the bitmap stays in memory forever and this eventually leads to an Out Of Memory error.

A possible cause is poor coding in the Android runtime which is storing hard references to each image, thus preventing their release.

I am working on a PR to the `ui/image` component which forces it to recycle the bitmaps everytime the source is updated or the image component gets unloaded. This only affects files, images, and URLs loaded in the "src" attribute. Native images or existing image sources passed in will not be recycled, since these are likely to be resused elsewhere.
