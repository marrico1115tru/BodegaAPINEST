import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TipoSitioService } from './tipo_sitio.service';
import { TipoSitio } from './entities/TipoSitio.entity';

@Controller('tipo-sitio')
export class TipoSitioController {
  constructor(private readonly tipoSitioService: TipoSitioService) {}

  @Post()
  create(@Body() data: Partial<TipoSitio>) {
    return this.tipoSitioService.create(data);
  }

  @Get()
  findAll() {
    return this.tipoSitioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoSitioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<TipoSitio>) {
    return this.tipoSitioService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoSitioService.remove(+id);
  }
}
