import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSitio } from './entities/TipoSitio.entity';
import { TipoSitioController } from './tipo_sitio.controller';
import { TipoSitioService } from './tipo_sitio.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSitio])],
  controllers: [TipoSitioController],
  providers: [TipoSitioService],
})
export class TipoSitioModule {}
