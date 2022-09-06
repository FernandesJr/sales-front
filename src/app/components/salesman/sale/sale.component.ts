import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  public products: Product[] = [
    {id: 1, name: 'Amargo Tradicional', price: 21.8,
      description: 'Amargo 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-700px.jpg'},
    {id: 2, name: 'Amargo Berinjela', price: 21.8,
      description: 'Amargo Berinjela 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-berinjela-700px.jpg'},
    {id: 3, name: 'Amargo Hortelã', price: 21.8,
      description: 'Amargo Hortelã 500 ml', amount: 0, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-hortela-700px.jpg'}
  ];


  /*formCardProduct: UntypedFormGroup = this.formBuilder.group({
    quantityProduct: [''],
    amountProduct: ['']
  })*/

  /*grupForm = new FormGroup({
    quantity: new FormControl(this.products[0].quantity),
    amount: new FormControl(this.products[0].amount),
  });*/

  /*grupForm = this.formBuilder.group({  injetar o FormBuilder
    quantity: [''],
    amount: ['0.00']
  })*/

  constructor() {}

  ngOnInit(): void {
  }

  public somarQuantity(idProduct: number): void {
    this.products.forEach((p) => {
      if(p.id == idProduct) {
        this.products[idProduct-1].amount =
          this.products[idProduct-1].quantity * this.products[idProduct-1].price;
      }
    });
  }

  public submit() {
    console.log(this.products);
  }
}
