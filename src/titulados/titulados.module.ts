import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Titulados } from './entities/Titulados.entity';
import { TituladosController } from './titulados.controller';
import { TituladosService } from './titulados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Titulados])],
  controllers: [TituladosController],
  providers: [TituladosService],
})
export class TituladosModule {}
