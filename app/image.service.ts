import {Injectable} from "@angular/core";
import {ImageSource} from "image-source";
import imageSource = require("image-source");

@Injectable()
export class ImageService {

  image: ImageSource;

  constructor() {
    this.image = imageSource.fromFile('~/img/image01.jpg');
  }

}