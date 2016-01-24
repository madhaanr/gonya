import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Image} from './image';

@Component({
    selector: 'image-form',
    templateUrl: 'app/image-form.component.html',
})
export class ImageFormComponent {
    model = new Image(18, 'Dr IQ', Date.now());
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    previewFile() {
        var preview = (<HTMLInputElement>document.querySelector('img'));
        var file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
        var reader = new FileReader();
 
        reader.addEventListener("load", function() {
            preview.src=reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    get diagnostic() { return JSON.stringify(this.model); }
}
/*function previewFile() {
    var preview = (<HTMLInputElement>document.querySelector('img'));
    var file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}*/