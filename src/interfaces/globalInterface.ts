export interface IAppContextAlert {
  action: string;
  message: string;
}
export interface IAppContextFilter {
  author: string;
  id: string;
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

export enum ValidFiles {
  ID = 'id',
  AUTHOR = 'author',
  CREATED = 'createdAt',
}
