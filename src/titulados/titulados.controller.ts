import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TituladosService } from './titulados.service';
import { Titulados } from './entities/Titulados.entity';

@Controller('titulados')
export class TituladosController {
  constructor(private readonly tituladosService: TituladosService) {}

  @Post()
  create(@Body() data: Partial<Titulados>) {
    return this.tituladosService.create(data);
  }

  @Get()
  findAll() {
    return this.tituladosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tituladosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Titulados>) {
    return this.tituladosService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tituladosService.remove(+id);
  }
}
