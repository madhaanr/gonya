import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Image} from './image';
import {FirebaseEventPipe} from './firebasepipe';

@Component({
    selector: 'image-form',
    templateUrl: 'app/image-form.component.html',
    pipes: [FirebaseEventPipe]
})
export class ImageFormComponent {
    /*model = new Image(18, 'Dr IQ', Date.now());
    submitted = false;*/
    firebaseUrl: string;
	messagesRef: Firebase;
    constructor() {
		this.firebaseUrl = "https://gonya.firebaseio.com/messages";
		this.messagesRef = new Firebase(this.firebaseUrl);
		/*this.messagesRef.onAuth((user) => {
			if (user) {
				this.authData = user;
				this.isLoggedIn = true;
			}
		});*/
	}
    //onSubmit() { this.submitted = true; }
    previewFile() {
        var preview = (<HTMLInputElement>document.querySelector('img'));
        var file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
        var reader = new FileReader();
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            reader.addEventListener("load", function() {
                preview.src = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }
    doneTyping($event) {
	  if($event.which === 13) {
	    this.addMessage($event.target.value);
	    $event.target.value = null;
	  }
	}
    addMessage(message: string) {
		this.messagesRef.push({
			name: message
		});
	}
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