## NativeScript Android Memory Leak on Image Component

This contains two tests which confirm memory leak bugs in NativeScript/Android when swapping between two images or changing routes among image intensive pages.

### Github Issue

See the [discussion here](https://github.com/NativeScript/NativeScript/issues/2571).

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

### Automated Unit Tests

These tests should be part of the automated test suite, but I don't know how to do that so I would appreciate any help in that direction.

### iOS Tests

I haven't gotten around to running these to see if they pass on iOS. If somebody tries before I do please open an issue to let me know!

### Image Credits

All images used were downloaded from [PixaBay.com](https://pixabay.com) and are released free of copyrights under [Creative Commons CC0](https://creativecommons.org/publicdomain/zero/1.0/).