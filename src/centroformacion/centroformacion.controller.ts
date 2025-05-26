import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CentroformacionService } from './centroformacion.service';
import { Centroformacion } from './entities/Centroformacion.entity';

@Controller('centroformacion')
export class CentroformacionController {
  constructor(private readonly service: CentroformacionService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() data: Centroformacion) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Centroformacion) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
