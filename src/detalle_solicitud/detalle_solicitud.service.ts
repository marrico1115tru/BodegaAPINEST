import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleSolicitud } from './entities/DetalleSolicitud.entity';

@Injectable()
export class DetalleSolicitudService {
  constructor(
    @InjectRepository(DetalleSolicitud)
    private readonly detalleRepo: Repository<DetalleSolicitud>,
  ) {}

  async create(data: Partial<DetalleSolicitud>) {
    const nuevo = await this.detalleRepo.save(data);
    return {
      message: 'Detalle de solicitud registrado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const detalles = await this.detalleRepo.find({
      relations: ['idProducto', 'idSolicitud'],
    });
    return {
      message: 'Listado de detalles de solicitudes',
      data: detalles,
    };
  }

  async findOne(id: number) {
    const detalle = await this.detalleRepo.findOne({
      where: { id },
      relations: ['idProducto', 'idSolicitud'],
    });
    return {
      message: 'Detalle de solicitud encontrado',
      data: detalle,
    };
  }

  async update(id: number, data: Partial<DetalleSolicitud>) {
    await this.detalleRepo.update(id, data);
    const actualizado = await this.detalleRepo.findOneBy({ id });
    return {
      message: 'Detalle de solicitud actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.detalleRepo.delete(id);
    return {
      message: 'Detalle de solicitud eliminado correctamente',
    };
  }
}
