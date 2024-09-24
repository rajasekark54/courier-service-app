import { Offer } from '../models/offer';
import { Package } from '../models/package';

export class DiscountService {
  private offers: Offer[] = [
    new Offer('OFR001', 10, 70, 200, 50, 150),
    new Offer('OFR002', 7, 100, 250, 50, 150),
    new Offer('OFR003', 5, 10, 150, 50, 250),
  ];

  getDiscount(pkg: Package): number {
    const offer = this.offers.find(o => o.code === pkg.offerCode);
    if (offer && offer.isValid(pkg.weight, pkg.distance)) {
      const baseDeliveryCost = 100;
      const deliveryCost = baseDeliveryCost + pkg.weight * 10 + pkg.distance * 5;
      return (offer.discount / 100) * deliveryCost;
    }
    return 0;
  }
}
