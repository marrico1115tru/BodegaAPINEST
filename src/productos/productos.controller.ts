import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from './entities/Productos.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() data: Partial<Productos>) {
    return this.productosService.create(data);
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Productos>) {
    return this.productosService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productosService.remove(+id);
  }
}
