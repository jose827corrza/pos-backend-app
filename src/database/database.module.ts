import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customers.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '123456',
      database: 'pos_db',
      // entities: [__dirname + './**/*.entity{.ts,.js}'], //TODO
      entities: [Customer], //TODO
      synchronize: true, // Remove to PRD environment TODO
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
