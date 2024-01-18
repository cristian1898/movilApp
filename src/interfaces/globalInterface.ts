export interface IAppContextAlert {
  action: string;
  message: string;
}
export interface IAppContextFilter {
  author: string;
  id: string;
}
export interface IAppContextActionView {
  type: string;
  url?: string;
}
export interface ResponseMethod {
  status: number;
  message: string;
  details?: any;
}
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
export enum ACTIONS {
  LIST = 'LIST',
  VIEW = 'VIEW',
  CREATE = 'CREATE',
}
export enum ValidPrintForm {
  AUTHOR = 'author',
  BOOK = 'book',
}
export enum ValidFiles {
  ID = 'id',
  AUTHOR = 'author',
  CREATED = 'createdAt',
}

export enum StaticsResponses {
  AUTHOR = 'Author',
  BOOK = 'Libro',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  ERROR_MESSAGE = 'Ha ocurrido un error inesperado, por favor intente nuevamente',
  ERROR_FORM = 'Por favor, complete todos los campos obligatorios.',
  IMG = 'https://i.pinimg.com/736x/73/f1/62/73f16207e11bab3bea90a0eb7e0a194a.jpg',
}
