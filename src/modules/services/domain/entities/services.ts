/**
 *Entidad Services
 */

export class Services {
  id: string;
  service_code: string;
  service_description: string;

  constructor(id: string, service_code: string, service_description: string) {
    this.id = id;
    this.service_code = service_code;
    this.service_description = service_description;
  }

  setId(id: string) {
    this.id = id;
  }

  value() {
    return {
      id: this.id,
      service_code: this.service_code,
      service_description: this.service_description,
    };
  }
}
