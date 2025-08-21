/**
 * Entidad User
 */
export class User {
  id: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  password: string;
  activo: string;

  constructor(
    id: string,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    correo_electronico: string,
    password: string,
    activo: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.correo_electronico = correo_electronico;
    this.password = password;
    this.activo = activo;
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
      nombre: this.nombre,
      apellido_paterno: this.apellido_paterno,
      apellido_materno: this.apellido_materno,
      correo_electronico: this.correo_electronico,
      password: this.password,
      activo: this.activo,
    };
  }
}
