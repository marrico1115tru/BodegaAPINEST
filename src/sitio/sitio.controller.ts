import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SitioService } from './sitio.service';
import { Sitio } from './entities/Sitio.entity';

@Controller('sitios')
export class SitioController {
  constructor(private readonly sitioService: SitioService) {}

  @Post()
  create(@Body() data: Partial<Sitio>) {
    return this.sitioService.create(data);
  }

  @Get()
  findAll() {
    return this.sitioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sitioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Sitio>) {
    return this.sitioService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sitioService.remove(+id);
  }
}
