import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          entities: [__dirname + './**/*.entity{.ts,.js}'],
          type: 'postgres',
          // url: configService.database.url, //TODO
          database: configService.database.name,
          port: configService.database.port,
          host: configService.database.host,
          password: configService.database.psswd,
          username: configService.database.user,
          synchronize: false,
          autoLoadEntities: true,
          // ssl: {
          //   rejectUnauthorized: false,
          // },
        };
      },
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'root',
      // password: '123456',
      // database: 'pos_db',
      // // entities: [__dirname + './**/*.entity{.ts,.js}'], //TODO
      // entities: [Customer], //TODO
      // synchronize: true, // Remove to PRD environment TODO
      // autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
