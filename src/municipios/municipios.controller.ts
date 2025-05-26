import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { Municipios } from './entities/Municipios.entity';

@Controller('municipios')
export class MunicipiosController {
  constructor(private readonly municipiosService: MunicipiosService) {}

  @Get()
  findAll(): Promise<Municipios[]> {
    return this.municipiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Municipios> {
    return this.municipiosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Municipios>): Promise<Municipios> {
    return this.municipiosService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Municipios>,
  ): Promise<Municipios> {
    return this.municipiosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.municipiosService.remove(id);
  }
}
