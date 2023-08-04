import 'angular-material';
import 'angular-messages';
import {helloWorldComponent} from "./components/hello-world/hello-world.component";
import {reactComponent} from "./components/react-component/react-component.component";


export const app = angular.module('app', ['ngMaterial', 'ngMessages'])
  .component('reactComponent', reactComponent)
  .component('helloWorld', helloWorldComponent)