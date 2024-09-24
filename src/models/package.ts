export class Package {
  public readonly id: string;
  public readonly weight: number;
  public readonly distance: number;
  public offerCode: string | null;
  public vehicleId?: string;

  constructor(id: string, weight: number, distance: number, offerCode: string | null = null, vehicleId?: string) {
    this.id = id;
    this.weight = weight;
    this.distance = distance;
    this.offerCode = offerCode;
    this.vehicleId = vehicleId; // Optional vehicleId
  }

  public updateOfferCode(newOfferCode: string | null): void {
    this.offerCode = newOfferCode;
  }

  public isEligibleForOffer(offerCode: string): boolean {
    return this.offerCode === offerCode;
  }
}
