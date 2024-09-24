import { PackageDetails } from 'src/types/order-assignment.type';
import { User } from '../models/user';

export class OrderAssignmentService {
  constructor(private users: User[]) {}

  public assignOrdersToUsers(orders): { [key: string]: PackageDetails }[] {
    orders.sort((a, b) => b.weight - a.weight);
    let isAllOrderProcessed = false;

    while (!isAllOrderProcessed) {
      isAllOrderProcessed = true;

      for (const user of this.users) {
        const vehicle = user?.vehicle;
        if (!vehicle) continue;

        let availableWeight = vehicle.maxWeight;
        for (const order of orders) {
          if (!order.vehicleId && availableWeight >= order.weight) {
            availableWeight -= order.weight;
            order.vehicleId = vehicle.id;
            const deliveryTime = this.calculateDeliveryTime(order.distance, vehicle.speed);

            vehicle.timeInHour += deliveryTime;
            order.deliveryTime = vehicle.timeInHour.toFixed(2);
            isAllOrderProcessed = false;
          }
        }
      }
    }
    return orders;
  }

  calculateDeliveryTime(distance: number, speed: number): number {
    return distance / speed;
  }
}
