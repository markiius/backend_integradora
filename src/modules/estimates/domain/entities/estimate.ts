/**
 * Entidad Product
 * */

export class Estimate {
  id: string;
  id_property: string;
  estimate_number: string;
  send_date: Date;
  expiration_date: Date;
  acceptation_date: Date;
  id_user: string;
  service_type: string;
  description: string;
  quantity: number;
  amount: number;
  tax_included: boolean;
  subtotal: number;
  tax_amount: number;
  total: number;

  constructor(
    id: string,
    id_property: string,
    estimate_number: string,
    send_date: Date,
    expiration_date: Date,
    acceptation_date: Date,
    id_user: string,
    service_type: string,
    description: string,
    quantity: number,
    amount: number,
    tax_included: boolean,
    subtotal: number,
    tax_amount: number,
    total: number,
  ) {
    this.id = id;
    this.id_property = id_property;
    this.estimate_number = estimate_number;
    this.send_date = send_date;
    this.expiration_date = expiration_date;
    this.acceptation_date = acceptation_date;
    this.id_user = id_user;
    this.service_type = service_type;
    this.description = description;
    this.quantity = quantity;
    this.amount = amount;
    this.tax_included = tax_included;
    this.subtotal = subtotal;
    this.tax_amount = tax_amount;
    this.total = total;
  }

  setId(id: string) {
    this.id = id;
  }

  value() {
    return {
      id: this.id,
      id_property: this.id_property,
      estimate_number: this.estimate_number,
      send_date: this.send_date,
      expiration_date: this.expiration_date,
      acceptation_date: this.acceptation_date,
      id_user: this.id_user,
      service_type: this.service_type,
      description: this.description,
      quantity: this.quantity,
      amount: this.amount,
      tax_included: this.tax_included,
      subtotal: this.subtotal,
      tax_amount: this.tax_amount,
      total: this.total,
    };
  }
}
