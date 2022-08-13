import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async findItemByName(name: string, manager?: EntityManager): Promise<Item> {
    const repo = manager ? manager.getRepository(Item) : this.itemRepository;

    const result = await repo.findOne({
      where: { name },
    });

    return result;
  }
}
