import { Package } from './package';
import { Vehicle } from './vehicle';

export class User {
  public id: string;
  public name: string;
  public email: string;
  public vehicle?: Vehicle;
  public orders?: Package[];

  constructor(id: string, name: string, vehicle?: Vehicle) {
    this.id = id;
    this.name = name;
    this.vehicle = vehicle;
  }
}
