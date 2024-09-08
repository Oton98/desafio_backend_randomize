import { Module } from '@nestjs/common';
import { RandomNumberModule } from './random-number/random-number.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [RandomNumberModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})

export class AppModule { }
