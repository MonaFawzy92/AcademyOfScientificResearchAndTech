import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/core/public.service';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css']
})
export class GenerateCodeComponent implements OnInit {

  //employeeStaffId: number = 26018;
  employeeStaffId: number = 26782;

  code: string;
  constructor(private service: PublicService) { }

  ngOnInit(): void {
  }

  generateOrderCode() {
    this.service.post(null, `order/generateOrderCode/${this.employeeStaffId}`).subscribe(res => {
      this.code = res;
    });
  }
}
