import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { Accesos } from './entities/Accesos.entity';

@Controller('accesos')
export class AccesosController {
  constructor(private readonly accesosService: AccesosService) {}

  @Post()
  create(@Body() data: Partial<Accesos>) {
    return this.accesosService.create(data);
  }

  @Get()
  findAll() {
    return this.accesosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accesosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Accesos>) {
    return this.accesosService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.accesosService.remove(+id);
  }
}
