import { Sale } from 'src/app/model/sale';
import { Ticket } from './../../../model/ticket';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-history-client',
  templateUrl: './history-client.component.html',
  styleUrls: ['./history-client.component.scss']
})
export class HistoryClientComponent implements OnInit {

  public formSummary = this.formBuilder.group({  //injetar o FormBuilder
    cnpj: ['', [Validators.required, Validators.minLength(14)]]
  });

  public clientName: string = "";
  public tickes: Ticket[] = [];
  public hasTicket: string = '';

  //Colunas da tabela tickets
  displayedColumnsTicket: string[] = ['id', 'dueDate', 'amount'];


  //Dados que preenchem a tabela Sales
  public sales: Sale[] = [];
  //Colunas da tabela Sales
  displayedColumnsSale: string[] = ['id', 'salesmanName', 'amount', 'formPay'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public checkCnpj() {
    if (this.formSummary.value.cnpj?.length == 14) {
      //TODO Implement request backend
      this.clientName = 'Farmácia teste de Implantação';

      //dados que preenchem a tabela Ticket mocakados
      this.tickes = [
        {id: 1, dueDate: '26/09/2022', amount: 1500},
        {id: 2, dueDate: '28/10/2022', amount: 1500}
      ];
      if(this.tickes.length != 0) this.hasTicket = 'Boletos em atraso';
      else this.hasTicket = 'Nenhum boleto em atraso';

      //dados que preenchem a tabela Sales mocakados
      this.sales = [
        {id: 1, salesman: {name: 'Nel'}, date: '27/09/2022', formPay: 'á vista', amount: 4500},
        {id: 2, salesman: {name: 'Geraldo'}, date: '27/09/2022', formPay: 'á vista', amount: 8150},
        {id: 3, salesman: {name: 'Reinaldo'}, date: '27/09/2022', formPay: 'á vista', amount: 2750}
      ]

    } else {
      this.clientName = '';
      this.tickes = [];
      this.hasTicket = '';
      this.sales = [];
    }
  }

}
