import {
  Component, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from'@angular/forms'
import { EmployeeService } from './employee-service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public employeeForm:FormGroup;
  public allEmployee:Object;
  constructor(private fb:FormBuilder,private empService:EmployeeService){

  }
  ngOnInit(){
    console.log("hi");
    this.employeeForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:[''],
      contactNumber:[''],
      emailAddress:[''],
      dateOfBirth:['']
    })
  }
  addEmployee(){
    this.empService.createEmployee(this.employeeForm.value).subscribe((resp)=>{
      console.log("User has been added.");
    })
  }
  getAllEmployee(){
    this.empService.getAllEmployee().subscribe((resp)=>{
      console.log(resp);
      this.allEmployee=resp;
    })
  }
  save(){
    //this.addEmployee();
    console.log(this.employeeForm.value);
    this.getAllEmployee();

  }
}
