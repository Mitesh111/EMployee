import {
  Component
} from '@angular/core';
import { EmployeeService } from '../employee-service';
import {
  GridApi,
  GridOptions
} from 'ag-grid-community';
import { SkyCellType } from '@skyux/ag-grid';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public gridData: Object ;
  public columnDefs = [
    {
      field:'id',
      headerName:'Id',
      hide:true
    },
    {
    field: 'firstName',
    headerName: 'First Name',
    type:SkyCellType.Autocomplete
    } ,
    {
    field: 'lastName',
    headerName: 'Last Name',
    type:SkyCellType.Autocomplete
    }] ;
  public gridApi: GridApi;
  public gridOptions: GridOptions;

  constructor(private empService: EmployeeService) {}
  ngOnInit(){
    this.empService.getAllEmployee().subscribe((resp)=>{
      console.log(resp);
      this.gridData=resp;
    });
    // this.gridOptions = {
    //   columnDefs: this.columnDefs,
    //   onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    // };
    // this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
    // console.log(this.gridOptions);
    
  }
  // public onGridReady(gridReadyEvent: GridReadyEvent): void {
  //   this.gridApi = gridReadyEvent.api;
  //   this.gridApi.sizeColumnsToFit();
  // }
}
