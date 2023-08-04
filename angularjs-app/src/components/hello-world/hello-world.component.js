import template from './hello-world.html'
export const helloWorldComponent = {
  template: template,
  controller: function GreetUserController() {
    this.user = 'world';
  }
};