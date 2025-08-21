/**
 * Entidad Properties
 */

export class Properties {
  id: string;
  property_name: string;
  manager_name: string;
  last_name_mgr: string;
  id_client: string;
  phone: number;
  email: string;
  cc_email: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  invoice_processing: string;
  territory: string;

  constructor(
    id: string,
    property_name: string,
    manager_name: string,
    last_name_mgr: string,
    id_client: string,
    phone: number,
    email: string,
    cc_email: string,
    address: string,
    city: string,
    state: string,
    zip: number,
    invoice_processing: string,
    territory: string,
  ) {
    this.id = id;
    this.property_name = property_name;
    this.manager_name = manager_name;
    this.last_name_mgr = last_name_mgr;
    this.id_client = id_client;
    this.phone = phone;
    this.email = email;
    this.cc_email = cc_email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.invoice_processing = invoice_processing;
    this.territory = territory;
  }
  setId(id: string) {
    this.id = id;
  }

  /**
   *
   * @returns Estructura primitiva (sin instancia de Product)
   */
  value() {
    return {
      id: this.id,
      property_name: this.property_name,
      manager_name: this.manager_name,
      last_name_mgr: this.last_name_mgr,
      id_client: this.id_client,
      phone: this.phone,
      email: this.email,
      cc_email: this.cc_email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      invoice_processing: this.invoice_processing,
      territory: this.territory,
    };
  }
}
