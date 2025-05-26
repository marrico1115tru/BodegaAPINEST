import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opciones } from './entities/Opciones.entity';
import { OpcionesService } from './opciones.service';
import { OpcionesController } from './opciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Opciones])],
  controllers: [OpcionesController],
  providers: [OpcionesService],
})
export class OpcionesModule {}
