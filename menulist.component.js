(function () {
'use strict';
    
angular.module('MenuList')
.component('menuList', {
  templateUrl: 'menulist.template.html',
  bindings: {
  items: '<'
}
});
    
})();