import { Component} from '@angular/core';
import { CounterEventArgs } from './user-form/user-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  ngOnInit () {  }

  isMobileVerifyChecked=false;
  counter:CounterEventArgs;

  OnClickCheckbox(eventArgs:CounterEventArgs) {
    console.log("hi",eventArgs);
    if(eventArgs.counter){
      this.isMobileVerifyChecked=true;
      this.counter=eventArgs;
    }
  }

}
