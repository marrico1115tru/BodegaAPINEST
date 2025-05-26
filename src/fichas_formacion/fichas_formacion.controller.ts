import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FichasFormacionService } from './fichas_formacion.service';
import { FichasFormacion } from './entities/FichasFormacion.entity';

@Controller('fichas-formacion')
export class FichasFormacionController {
  constructor(private readonly fichasFormacionService: FichasFormacionService) {}

  @Post()
  create(@Body() data: Partial<FichasFormacion>) {
    return this.fichasFormacionService.create(data);
  }

  @Get()
  findAll() {
    return this.fichasFormacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fichasFormacionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<FichasFormacion>) {
    return this.fichasFormacionService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fichasFormacionService.remove(+id);
  }
}
