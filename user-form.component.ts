import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public show: boolean;
  public show1:boolean;
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  FirstName:string = '';
  lastName:string='';
  email:string='';
  valid:Validators;
  rFormgroup: FormGroup;         
  Address:string = '';
  country:string='';
  state:string='';
  LastName:string='';
  phoneNumber:number;
  counter:number=0;

  @Output() change=new EventEmitter;

  constructor(private frombuilder1:FormBuilder) {

    this.rFormgroup = frombuilder1.group({
      'FirstName' :  [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'lastName' : [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'email' : [null, [Validators.required, Validators.email]],
      'Address' : [null, Validators.required],
      'country' : [null, Validators.required],
      'state' : [null, Validators.required],
      'phoneNumber': [null,Validators.required]
    });
   }

 
  addPost(post){
    this.Address = post.Address;
    this.country = post.country;
    this.state=post.state;
    this.phoneNumber=post.phoneNumber;
    this.email=post.email;
    this.lastName=post.lastName;
    this.FirstName=post.FirstName;  
  }

  ngOnInit() {
    this.show =true;
    this.show1=true;
  }

  toggle(){
    if(this.show === true ){
      this.show = false;
    } else {
    this.show = true;
    }
  }


  count(){
    if(this.show1===true){
      this.show1=false;
      this.counter=this.counter+1;
    } else {
    this.show1 = true;
    this.counter=this.counter-1;
    }
    console.log("login");
    this.change.emit({counter:this.counter});
  }

}

export interface CounterEventArgs {
  counter:number;
}
