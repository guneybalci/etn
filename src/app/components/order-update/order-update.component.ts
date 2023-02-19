import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css'],
})
export class OrderUpdateComponent implements OnInit {
  orderUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createorderUpdateForm();
  }

  createorderUpdateForm() {
    this.orderUpdateForm = this.formBuilder.group({
      id: ['', Validators.required],
      orderNo: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  update() {
    if (this.orderUpdateForm.valid) {
      let orderModel = Object.assign({}, this.orderUpdateForm.value);
      this.orderService.update(orderModel).subscribe(
        (response) => {
          this.toastrService.success('Sipariş Güncellendi.');
        },
        (responseError) => {
          console.log(responseError.error);
        }
      );
    } else {
      this.toastrService.error('İşlem Başarısız');
    }
  }
}
