(function () {

'use strict';

angular.module('MenuList')
.component('subListComponent', {
    templateUrl: 'sublist.template.html',
    bindings: {
        subList: '<'
    }
});

})();