import { ZipCodeValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZD } from "./ZipCodeValidator";
import * as zdas from "./ZipCodeValidator";
import { ZCZ } from "./ZipCodeValidator";

import dfValidator from "./ZipCodeValidator";

let myvalidator = new ZipCodeValidator();
console.log(myvalidator.isAcceptable('tttttt'));

let myzd = new ZD();
console.log(myzd.isAcceptable('50000'));

let myaszd = new zdas.ZipCodeValidator();
console.log(myaszd.isAcceptable('zdasszdaszdas'));

let df = new dfValidator();
console.log(df.isAcceptable("66666"));