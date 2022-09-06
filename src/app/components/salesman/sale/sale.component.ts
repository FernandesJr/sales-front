import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  public products: Product[] = [
    {id: 1, name: 'Amargo Tradicional', price: '21.8',
      description: 'Amargo 500 ml', amount: '0', quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-700px.jpg'},
    {id: 2, name: 'Amargo Berinjela', price: '21.8',
      description: 'Amargo Berinjela 500 ml', amount: 150, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-berinjela-700px.jpg'},
    {id: 3, name: 'Amargo Hortelã', price: '21.8',
      description: 'Amargo Hortelã 500 ml', amount: 1700, quantity : 0,
      pathImg: 'assets/images/products/amargo/amargo-hortela-700px.jpg'}
  ];

  public amount: any = '0';

  formCardProduct: UntypedFormGroup = this.formBuilder.group({
    quantityProduct: [''],
    amountProduct: ['']
  })

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  public somar_product(idProduct: number): void {
    if(idProduct == this.products[0].id) {

    }
  }

}
