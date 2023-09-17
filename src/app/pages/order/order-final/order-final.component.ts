import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-final',
  templateUrl: './order-final.component.html',
  styleUrls: ['./order-final.component.scss']
})
export class OrderFinalComponent implements OnInit {
  quantity = 1;
  cart_items = [1,2,1,2];
  selected_payment_option: string | undefined;
  payment_options: string[] = ['UPI', 'Wallet', 'Net Banking', 'Cash On Delivery'];
  addNewAddress:boolean = false;
  step_counter=1;

  demo_address=[
    {"name":"Jit Koley","mobile":"9876543210","address":"1/2/3, ABC Road , Kol - 700035","type":"Home"},
    {"name":"Sarthak Koley","mobile":"9876543210","address":"1/2/3, ABC Road , Kol - 700035","type":"Work"},
  ]

  states: State[] = [
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
    {value: 'WB', viewValue: 'West Bengal'},
    {value: 'AS', viewValue: 'Assam'},
    {value: 'JH', viewValue: 'Jharkhand'},
  ];
  selectedState='';

  constructor(private formBuilder: FormBuilder) { }

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['1/2/3, ABC Road - 700012', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  checked = true;
  Addresses = ['1/2/3, ABC Road - 700012','4/5/6, DEF Road - 700014','7/8/9, GHI Road - 700015']

  ngOnInit(): void {

  }

  stepPosition(direction:string){
    if(direction != ''){
      this.step_counter++;
    }else{
      if(this.step_counter > 1){
        this.step_counter--;
      }else{
        this.step_counter = 1;
      }
    }
  }

  move_to(val:number){
    if(this.step_counter > val) this.step_counter = val;
  }

}
