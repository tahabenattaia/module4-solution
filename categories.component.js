(function () {
    angular
      .module('MenuApp')
      .component('categories', {
        templateUrl: 'templates/categories.template.html',
        bindings: {
          categories: '<'
        }
      });
  })();