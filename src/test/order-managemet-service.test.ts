import { main } from '../index';
import { Package } from '../models/package';
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';
import { expectedOutput1, expectedOutput2 } from './fixtures.ts';

describe('Order Management', () => {
  test('Example -1', () => {
    const vehicle1 = new Vehicle('V1', 70, 200);
    const vehicle2 = new Vehicle('V2', 70, 200);
    const vehicle3 = new Vehicle('V3', 70, 200);

    const user1 = new User('U1', 'Kiki', vehicle1);
    const user2 = new User('U2', 'Tombo', vehicle2);
    const user3 = new User('U3', 'Cat Joji.', vehicle3);
    const users = [user1, user2, user3];

    const packages: Package[] = [
      new Package('PKG1', 5, 5, 'OFR001'),
      new Package('PKG2', 15, 5, 'OFR002'),
      new Package('PKG3', 10, 100, 'OFR003'),
    ];
    const baseDeliveryCost = 100;

    const result = main(baseDeliveryCost, users, packages);
    expect(result).toEqual(expectedOutput1);
  });

  test('Example -2', () => {
    const baseDeliveryCost = 100;

    const vehicle1 = new Vehicle('V1', 70, 200);
    const vehicle2 = new Vehicle('V2', 70, 200);

    const user1 = new User('U1', 'Kiki', vehicle1);
    const user2 = new User('U2', 'Tombo', vehicle2);
    const user3 = new User('U3', 'Cat Joji.');
    const users = [user1, user2, user3];

    const packages: Package[] = [
      new Package('PKG1', 50, 30, 'OFR001'),
      new Package('PKG2', 75, 125, 'OFR002'),
      new Package('PKG3', 175, 100, 'OFR003'),
      new Package('PKG4', 110, 60, 'OFR003'),
      new Package('PKG5', 155, 95, 'NA'),
    ];

    const result = main(baseDeliveryCost, users, packages);
    expect(result).toEqual(expectedOutput2);
  });
});
