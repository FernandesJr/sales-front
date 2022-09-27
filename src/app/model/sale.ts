import { Salesman } from './salesman';
import { Product } from './product';

export interface Sale {
  id?: number,
  pharmacyId?: number,
  salesman?: Salesman,
  products?: Product[],
  amount?: number,
  date?: string,
  formPay?: string
}
