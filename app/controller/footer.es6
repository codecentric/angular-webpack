'use strict';

import ccImage from '../images/cc.png';

export default class FooterController {

  constructor($scope, VERSION) {
    this.version = VERSION;
    this.ccImage = ccImage;
  }

}
