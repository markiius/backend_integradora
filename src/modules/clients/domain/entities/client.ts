/**
 * Entidad Client
 */
export class Client {
  id: string;
  name_company: string;
  name_manager: string;
  LastName_manager: string;
  phone: string;
  email: string;
  cc_email: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  Procesamiento_factura: string;
  active: boolean;

  constructor(
    id: string,
    name_company: string,
    name_manager: string,
    LastName_manager: string,
    phone: string,
    email: string,
    cc_email: string,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    Procesamiento_factura: string,
    active: boolean = true,
  ) {
    this.id = id;
    this.name_company = name_company;
    this.name_manager = name_manager;
    this.LastName_manager = LastName_manager;
    this.phone = phone;
    this.email = email;
    this.cc_email = cc_email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip_code = zip_code;
    this.Procesamiento_factura = Procesamiento_factura;
    this.active = active;
  }

  setId(id: string) {
    this.id = id;
  }

  /**
   *
   * @returns Estructura primitiva (sin instancia de Client)
   */

  value() {
    return {
      id: this.id,
      name_company: this.name_company,
      name_manager: this.name_manager,
      LastName_manager: this.LastName_manager,
      phone: this.phone,
      email: this.email,
      cc_email: this.cc_email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,
      Procesamiento_factura: this.Procesamiento_factura,
      active: this.active,
    };
  }
}
