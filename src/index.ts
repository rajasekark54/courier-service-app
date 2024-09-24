import { OrderAssignmentService } from './services/order-assignment-service';
import { OrderManagementService } from './services/order-management-service';

export const main = (baseDeliveryCost, users, packages) => {
  const orderAssignmentService = new OrderAssignmentService(users);
  const orderManagementService = new OrderManagementService(orderAssignmentService);

  const packageDetail = orderManagementService.processPackages(baseDeliveryCost, packages);
  console.log(packageDetail);

  orderManagementService.getDeliveryTimeEstimation(packageDetail);

  const result = [];
  for (const item of packageDetail) {
    const { id, discount, totalCost, deliveryTime } = item;
    result.push({
      id,
      discount,
      totalCost,
      deliveryTime,
    });
  }

  return result;
};
