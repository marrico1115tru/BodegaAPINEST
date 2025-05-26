import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EntregaMaterialService } from './entrega_material.service';
import { EntregaMaterial } from './entities/EntregaMaterial.entity';

@Controller('entrega-material')
export class EntregaMaterialController {
  constructor(private readonly entregaMaterialService: EntregaMaterialService) {}

  @Post()
  create(@Body() data: Partial<EntregaMaterial>) {
    return this.entregaMaterialService.create(data);
  }

  @Get()
  findAll() {
    return this.entregaMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.entregaMaterialService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<EntregaMaterial>) {
    return this.entregaMaterialService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.entregaMaterialService.remove(+id);
  }
}
