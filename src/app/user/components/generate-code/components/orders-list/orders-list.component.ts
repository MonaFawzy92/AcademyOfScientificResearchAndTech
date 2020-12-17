import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from 'src/app/core/public.service';
import { OrderModel } from 'src/app/admin/models/userModel';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'tea', weight: 10, symbol: new Date().toLocaleString() },
  { position: 2, name: 'coffee', weight: 20, symbol: new Date().toLocaleString() },
  { position: 3, name: 'Latte', weight: 6.941, symbol: new Date().toLocaleString() },
  { position: 4, name: 'tea', weight: 10, symbol: new Date().toLocaleString() },
  { position: 5, name: 'coffee', weight: 20, symbol: new Date().toLocaleString() },
  { position: 6, name: 'Latte', weight: 6.941, symbol: new Date().toLocaleString() },
  { position: 7, name: 'tea', weight: 10, symbol: new Date().toLocaleString() },
  { position: 8, name: 'coffee', weight: 20, symbol: new Date().toLocaleString() },
  { position: 9, name: 'Latte', weight: 6.941, symbol: new Date().toLocaleString() },
  { position: 10, name: 'tea', weight: 10, symbol: new Date().toLocaleString() },
  { position: 11, name: 'coffee', weight: 20, symbol: new Date().toLocaleString() },
  { position: 12, name: 'Latte', weight: 6.941, symbol: new Date().toLocaleString() },
];

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['#', 'Order Code', 'Order Name', 'Price', 'Order Date'];
  dataSource: MatTableDataSource<OrderModel>;
  employeeStaffId: number = 1;
  ordersList: OrderModel[];

  constructor(private service: PublicService) {
    this.dataSource = new MatTableDataSource<OrderModel>();
  }

  ngOnInit() {
    this.getAllUserOrders();
  }

  getAllUserOrders() {
    this.service.getAll(`order/GetOrdersForEmployee/${this.employeeStaffId}`).subscribe(res => {
      this.ordersList = res;
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }
}
