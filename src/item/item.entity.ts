import { Column } from 'typeorm';

export class Item {
  static entityName = 'ItemEntity';

  id: number;

  name: string;

  description: string;

  @Column({
    name: 'retail_price',
  })
  retailPrice: string;
}
