export class Todo {
  id: string;
  label: string = '';
  description: string = '';
  category: string = '';
  done: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export interface Signin {
  token: string;
  name: string;
}
