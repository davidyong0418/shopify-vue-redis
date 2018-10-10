;(function () {

  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }
  }

  window['ibLocalStore'] = {
    _sloganVisible: true,
    _sloganMessage: '',
    _coupon: '',
    showSlogan: function (message) {
      if (localStorage.getItem('sloganMessage') !== message) {
        this.sloganMessage = message;
        this.sloganVisible = true;
        return true;
      } else {
        this.sloganVisible = (localStorage.getItem('sloganVisible'))
          ? JSON.parse(localStorage.getItem('sloganVisible'))
          : true;
        return this.sloganVisible;
      }
    },
    get sloganVisible() { 
      if (storageAvailable('localStorage')) {
        if (localStorage.getItem('sloganVisible')) {
          return JSON.parse(localStorage.getItem('sloganVisible'));
  		} else {
          return this._sloganVisible;
        }
      } else {
        return true;
      }
    },
    set sloganVisible(bool) {
      if (storageAvailable('localStorage')) {
		localStorage.setItem('sloganVisible', bool);
      }
      this._sloganVisible = bool;
    },
      
    set sloganMessage(message) {
      if (storageAvailable('localStorage')) {
		localStorage.setItem('sloganMessage', message);
      }
      this._sloganMessage = message;
    },
    get coupon() {
      if (storageAvailable('localStorage')) {
		return localStorage.getItem('coupon');
      } else {
        return this._coupon;
      }
    },
    set coupon(code) {
      if (storageAvailable('localStorage')) {
		localStorage.setItem('coupon', String(code));
      } else {
        this._coupon = code;
      }
    },
    set queryString(qs) {
      if (storageAvailable('localStorage')) {
		localStorage.setItem('queryString', String(qs));
      }
    },
  };

}());