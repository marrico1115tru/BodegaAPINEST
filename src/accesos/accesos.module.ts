import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesosController } from './accesos.controller';
import { AccesosService } from './accesos.service';
import { Accesos } from './entities/Accesos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accesos])],
  controllers: [AccesosController],
  providers: [AccesosService],
})
export class AccesosModule {}
