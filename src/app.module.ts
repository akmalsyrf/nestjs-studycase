import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      dropSchema: false,
      entities: ['src/**/*entity.ts', 'dist/**/*entity.js'],
    }),
    FilekitaModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: HttpErrorFilter }],
})
export class AppModule {}
