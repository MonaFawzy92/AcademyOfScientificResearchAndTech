export class UserModel {
    employeeStaffId: number;
    employeeEmail: string;

}

export class OrderModel {
    orderCode: number;
    employeeId: number;
    item: string;
    totalPrice: number;
    orderDate: Date;
    // code: string;
}
