import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OpcionesService } from './opciones.service';
import { Opciones } from './entities/Opciones.entity';

@Controller('opciones')
export class OpcionesController {
  constructor(private readonly opcionesService: OpcionesService) {}

  @Post()
  create(@Body() data: Partial<Opciones>) {
    return this.opcionesService.create(data);
  }

  @Get()
  findAll() {
    return this.opcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.opcionesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Opciones>) {
    return this.opcionesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.opcionesService.remove(+id);
  }
}
