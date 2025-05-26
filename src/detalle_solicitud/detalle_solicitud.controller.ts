import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DetalleSolicitudService } from './detalle_solicitud.service';
import { DetalleSolicitud } from './entities/DetalleSolicitud.entity';

@Controller('detalle-solicitud')
export class DetalleSolicitudController {
  constructor(private readonly detalleSolicitudService: DetalleSolicitudService) {}

  @Post()
  create(@Body() data: Partial<DetalleSolicitud>) {
    return this.detalleSolicitudService.create(data);
  }

  @Get()
  findAll() {
    return this.detalleSolicitudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.detalleSolicitudService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<DetalleSolicitud>) {
    return this.detalleSolicitudService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.detalleSolicitudService.remove(+id);
  }
}
