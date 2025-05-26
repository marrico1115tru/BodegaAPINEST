import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centroformacion } from './entities/Centroformacion.entity';
import { CentroformacionService } from './centroformacion.service';
import { CentroformacionController } from './centroformacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Centroformacion])],
  controllers: [CentroformacionController],
  providers: [CentroformacionService],
})
export class CentroformacionModule {}
