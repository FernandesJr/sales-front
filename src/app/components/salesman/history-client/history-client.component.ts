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

  public tickes: {id: any, date: any, amount: any}[] = [
    {id: '1', date: '26/09/2022', amount: '1500'},
    {id: '2', date: '28/10/2022', amount: '1500'}
  ];

  //Colunas da tabela
  displayedColumns: string[] = ['id', 'date', 'amount'];
  //dados que preenchem a tabela
  dataSource = this.tickes;

  constructor(private formBuilder: FormBuilder) { }

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

}
