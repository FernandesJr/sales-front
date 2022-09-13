import { Router } from '@angular/router';
import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  //Dados mocados
  public products: Product[] = [
    {id: 1, name: 'Amargo Tradicional', price: 21.8,
      description: 'Amargo 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-700px.jpg'},
    {id: 2, name: 'Amargo Berinjela', price: 21.8,
      description: 'Amargo Berinjela 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-berinjela-700px.jpg'},
    {id: 3, name: 'Amargo Hortelã', price: 21.8,
      description: 'Amargo Hortelã 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-hortela-700px.jpg'},
    {id: 4, name: 'Vitamel Capsula', price: 21.8,
      description: '60 Capsulas', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/vitamel/vitamel-cap.jpg'},
    {id: 5, name: 'Vitamel Mulher Capsula', price: 21.8,
      description: '60 Capsulas', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/vitamel/vitamel-mulher-cap.jpeg'},
    {id: 6, name: 'Arrelique', price: 21.8,
      description: '500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/arrelique/arrelique500ml.jpeg'}
  ];

  public amountSale: number = 0;

  public clientName: string = '';

  public formSummary = this.formBuilder.group({  //injetar o FormBuilder
    cnpj: ['', [Validators.required, Validators.minLength(14)]],
    formPay: ['', [Validators.required]],
    quantityTimes: [null]
  })

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  public checkCnpj() {
    if (this.formSummary.value.cnpj?.length == 14) {
      //TODO Implement request backend
      this.clientName = 'Farmácia teste de Implantação';
    } else {
      this.clientName = '';
    }
  }

  public addQuantityProd(idProduct: number): void {
    this.products.forEach((p) => {
      if(p.id == idProduct) {
        this.products[idProduct-1].amount =
          this.products[idProduct-1].quantity * this.products[idProduct-1].price;
      }
    });
    this.amountSaleFinish();
  }

  public amountSaleFinish(): void {
    this.amountSale = 0;
    this.products.forEach((p) => {
      this.amountSale += p.amount;
    });
  }

  //Validação mínima para venda
  public saleValid(): boolean {
    if (this.formSummary.value.cnpj?.length != 14) {
      this.openSnackBar('Informe um CNPJ válido');
      return false;
    }
    if (this.amountSale == 0) {
      this.openSnackBar('Informe ao menos um produto');
      return false;
    }
    if (this.formSummary.value.formPay == '') {
      this.openSnackBar('Informe uma forma de pagamento');
      return false;
    }
    if (this.formSummary.value.formPay == 'ticket') {
      if (this.formSummary.value.quantityTimes == null) {
        this.openSnackBar('Informe a quantidade de parcelamento');
      }
      return false;
    }
    return true;
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000
    });
  }

  public submit() {
    if (this.saleValid()){
      console.log(this.formSummary);
      this.toastr.success('Venda Realizada');
      this.router.navigate(['salesman/dashboard']);
    }
  }
}
