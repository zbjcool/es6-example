;(function (GLOBAL) {
  'use strict';
  var Big,
  /**
   * 定义了默认值
  */
  /**
   * 错误消息
   */
  P = {},
  // 自己定义了undefined
  UNDEFINED = void 0;
  
  function _Big_(){
      function Big(n) {
      var self = this;

      // Enable constructor usage without new.
      if (!(self instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

      // Duplicate.
      if (n instanceof Big) {
      } else {
        parse(self, n);
      }

      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */
      self.constructor = Big;
    }

    Big.prototype = P;

    return Big;
  
  }
  
  function parse(){}
  
  function stringify(x,id,n,k){}
  
  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  };
  
  // export
  
  Big = _Big_();
  Big['default'] = Big.Big = Big;
  //AMD.
  if (typeof define === 'function' && define.amd) {
    define(function () { return Big; });
  // Node and other CommonJS-like environments that support module.exports.
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Big;
  //Browser.
  } else {
    GLOBAL.Big = Big;
  }
 })(this)