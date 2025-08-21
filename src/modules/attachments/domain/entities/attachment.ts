/**
 * Entidad Attachment
 */
export class Attachment {
  id: string;
  id_estimated: string;
  url_link: string;

  constructor(id: string, id_estimated: string, url_link: string) {
    this.id = id;
    this.id_estimated = id_estimated;
    this.url_link = url_link;
  }

  setId(id: string) {
    this.id = id;
  }

  value() {
    return {
      id: this.id,
      id_estimated: this.id_estimated,
      url_link: this.url_link,
    };
  }
}
