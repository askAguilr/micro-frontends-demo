export const reactComponent = {
  template: '<div data-component-id="{{ngComponentId}}"  data-portal-id="{{ngPortalId}}" id="{{ngPortalId}}"/>',
  controller: function ReactController( $scope, $element, $attrs ) {
    $scope.ngPortalId=$attrs.ngPortalId;
    $scope.ngComponentId=$attrs.ngComponentId;
  }
};