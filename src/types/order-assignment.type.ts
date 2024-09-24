export type PackageDetails = {
  id: string;
  discount: number;
  totalCost: number;
  deliveryTime?: string;
};

export type PackageFullDetails = PackageDetails & {
  weight: number;
  distance: number;
  offerCode?: string;
  vehicleId?: string;
  totalCost: number;
};
