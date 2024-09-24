export class Vehicle {
  public id: string;
  public maxWeight: number;
  public speed: number;
  public availableWeight: number;
  public timeInHour: number = 0;

  constructor(id: string, speed: number, maxWeight: number) {
    this.id = id;
    this.maxWeight = maxWeight;
    this.availableWeight = maxWeight;
    this.speed = speed;
  }
}
