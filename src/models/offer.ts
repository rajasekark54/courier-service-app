export class Offer {
  public readonly code: string;
  public readonly discount: number;
  public readonly minWeight: number;
  public readonly maxWeight: number;
  public readonly minDistance: number;
  public readonly maxDistance: number;

  constructor(
    code: string,
    discount: number,
    minWeight: number,
    maxWeight: number,
    minDistance: number,
    maxDistance: number
  ) {
    this.code = code;
    this.discount = discount;
    this.minWeight = minWeight;
    this.maxWeight = maxWeight;
    this.minDistance = minDistance;
    this.maxDistance = maxDistance;
  }

  isValid(weight: number, distance: number): boolean {
    return this.isWeightValid(weight) && this.isDistanceValid(distance);
  }

  private isWeightValid(weight: number): boolean {
    return weight >= this.minWeight && weight <= this.maxWeight;
  }

  private isDistanceValid(distance: number): boolean {
    return distance >= this.minDistance && distance <= this.maxDistance;
  }
}
