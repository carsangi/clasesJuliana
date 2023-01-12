class Persona {
  private nombre: string;
  private edad: number;
  private sexo: string;
  private nacionalidad: string;
  private documentoIdentidad: number;

  constructor(
    nombre: string,
    edad: number,
    sexo: string,
    nacionalidad: string,
    documentoIdentidad: number
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.nacionalidad = nacionalidad;
    this.documentoIdentidad = documentoIdentidad;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getDocumentoIdentidad(): number {
    return this.documentoIdentidad;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public getNacionalidad(): string {
    return this.nacionalidad;
  }
}
let p1 = new Persona("Juliana", 23, "Femenino", "Colombiana", 12345);
let p2 = new Persona("Carlos", 26, "Hombre", "Colombiana", 45678);
let p3 = new Persona("Karol", 30, "Femenino", "Inglesa", 4987);
let p4 = new Persona("Andres", 32, "Hombre", "Español", 3289);

let personas: Array<Persona> = [];
personas.push(p1);
personas.push(p2);
personas.push(p3);
personas.push(p4);
for (let i = 0; i < personas.length; i++) {
  const element = personas[i];
  console.log(
    `Hola, mi nombre es: ${element.getNombre()} tengo ${element.getEdad()} y soy ${element.getNacionalidad()}`
  );
}

