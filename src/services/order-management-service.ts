import { Package } from '../models/package';
import { DiscountService } from './discount-service';
import { OrderAssignmentService } from '../services/order-assignment-service';
import { PACKAGE_DISTANCE_PER_COST, PACKAGE_WEIGHT_PER_COST } from '../utils/constants';
import { PackageFullDetails } from 'src/types/order-assignment.type';

export class OrderManagementService {
  private discountService: DiscountService;
  private orderAssignmentService: OrderAssignmentService;

  constructor(orderAssignmentService: OrderAssignmentService) {
    this.discountService = new DiscountService();
    this.orderAssignmentService = orderAssignmentService;
  }

  processPackages(baseDeliveryCost, packages: Package[]): PackageFullDetails[] {
    return packages.map(pkg => {
      const discount = this.discountService.getDiscount(pkg);
      const totalCost =
        baseDeliveryCost + pkg.weight * PACKAGE_WEIGHT_PER_COST + pkg.distance * PACKAGE_DISTANCE_PER_COST - discount;

      return {
        ...pkg,
        discount,
        totalCost,
      };
    });
  }

  getDeliveryTimeEstimation(packagesDetail) {
    return this.orderAssignmentService.assignOrdersToUsers(packagesDetail);
  }
}
