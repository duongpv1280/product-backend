import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './checkout/checkout.module';
import { ItemService } from './item/item.service';

@Module({
  imports: [CheckoutModule],
  controllers: [AppController],
  providers: [AppService, ItemService],
})
export class AppModule {}
