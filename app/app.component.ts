import {Component} from 'angular2/core';
import {ImageFormComponent} from './image-form.component';

@Component({
    selector: 'my-app',
    template: '<image-form></image-form>',
    directives: [ImageFormComponent]
})
export class AppComponent { 
}