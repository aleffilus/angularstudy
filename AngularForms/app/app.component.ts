import {Component} from '@angular/core'
import {Mock} from './mock'
import {Person} from './model'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [Mock]  
})
export class AppComponent { 
    user: Person;
    submitted:boolean;

    constructor(_mock: Mock){
        this.user = _mock.alessandro;
        this.submitted=false;
    }

    onSubmit(form){
        this.submitted=true;
        console.log("Enviando ...." + JSON.stringify(this.user));
    }
}