angular.module('primeiraApp').component('contentHeader', {
  bindings: {
    name: '@',
    small: '@',

  },
  template: `
  <section class="content-header">
    <h1>{{ $crtl.name }} <small>{{ $crtl.small }}</small></h1>
  </section>

  `
})
