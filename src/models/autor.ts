export class authorModel {
  id: string;
  name: string;
  email: string;
  img: string;
  biographyInformation: string;
  firstName: string;
  lastName: string;

  constructor(
    id: string = '',
    name: string = '',
    email: string = '',
    img: string = '',
    biographyInformation: string = '',
    firstName: string = '',
    lastName: string = '',
  ) {
    this.id = id = '';
    this.name = name;
    this.email = email;
    this.img = img;
    this.biographyInformation = biographyInformation;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
