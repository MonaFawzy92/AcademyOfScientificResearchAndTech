import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PublicService } from 'src/app/core/public.service';
import { UserModel, OrderModel } from '../../models/userModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddOrderComponent implements OnInit {
  //menuItems: string[] = ['coffee', 'tea', 'water'];
  menuCategories: string[] = ['Drinks', 'Sandwiches', 'Salad'];
  menuItems: string[] = [];

  employeeCodeValue: string;
  employeeCode: number;
  userModel: UserModel = new UserModel;
  orderModel: OrderModel = new OrderModel;

  createOrderFormGroup: FormGroup;
  staffIdCtrl: any;
  codeCtrl: any;
  emailCtrl: any;
  itemCtrl: any;
  isAllowanceCtrl: any;
  userStaffId: number;
  totalPrice: number;

  displayPrice: boolean = false;
  useAllowance: boolean = false;
  displayErrorMsg: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private service: PublicService) { }

  ngOnInit(): void {
    this.createOrderFormGroup = this.formBuilder.group({
      // code: ['', Validators.required],
      // staffId: ['', Validators.required],
      // email: ['', Validators.required],
      item: [' '],
      isAllowance: [false],
      category: ['']
    });
  }

  bindingFormControls() {
    // this.codeCtrl = this.createOrderFormGroup.controls['code'];
    // this.staffIdCtrl = this.createOrderFormGroup.controls['staffId'];
    // this.emailCtrl = this.createOrderFormGroup.controls['email'];
    this.itemCtrl = this.createOrderFormGroup.controls['item'];
    // this.isAllowanceCtrl = this.createOrderFormGroup.controls['isAllowance'];
  }

  getemployeeData(value: string) {
    if (value.length == 5) {
      this.employeeCodeValue = value;
      this.employeeCode = +value;
      this.getEmployeeInformation(this.employeeCode);
    }
    else
      return;
  }

  getEmployeeInformation(employeeCodeNum: number) {

    this.service.get(`order/GetEmployeeInfoForCode/${employeeCodeNum}`).subscribe(res => {
      this.userModel = res;
    }, error => {
      this.displayErrorMsg = true;
      console.log(error, "the error isssssss");

    });
  }

  addOrder() {
    this.bindingFormControls();
    this.fillOrderModel();

    this.service.post(this.orderModel, 'order/AddNewOrder').subscribe(res => {
      console.log(res);
      this.createOrderFormGroup.reset();
      this.employeeCodeValue = null;
      this.userModel = new UserModel();
      this.useAllowance = false;
      this.displayPrice = false;
    });
  }

  fillOrderModel() {
    this.orderModel.orderCode = this.employeeCode;
    this.orderModel.employeeId = 1;
    this.orderModel.totalPrice = this.totalPrice;
    this.orderModel.orderDate = new Date();
    this.orderModel.item = this.itemCtrl.value;
  }

  onCategorySelection(value: string) {
    if (value == "Drinks") {
      this.menuItems = ['Coffee', 'Tea', 'Water'];
    }
    else if (value == "Salad")
      this.menuItems = ['Green Salad', 'Tuna Salad', 'Coleslaw', 'Fruit salad'];
    else
      this.menuItems = ['Cheese', 'Chicken'];
  }

  onItemSelection() {
    this.displayPrice = true;
    this.useAllowance = true;
    this.totalPrice = 47;
  }

  onChangeAllowance(event) {
    debugger
    if (event.checked) {
      this.useAllowance = true;
      this.totalPrice = 40;
    } else {
      this.useAllowance = true;
      this.totalPrice = 47;
    }

  }
}
