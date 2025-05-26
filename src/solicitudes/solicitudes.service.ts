import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitudes } from './entities/Solicitudes.entity';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitudes)
    private readonly solicitudesRepo: Repository<Solicitudes>,
  ) {}

  async create(data: Partial<Solicitudes>) {
    const nueva = await this.solicitudesRepo.save(data);
    return {
      message: 'Solicitud creada correctamente',
      data: nueva,
    };
  }

  async findAll() {
    const solicitudes = await this.solicitudesRepo.find({
      relations: ['idUsuarioSolicitante', 'detalleSolicituds', 'entregaMaterials'],
    });
    return {
      message: 'Listado de solicitudes',
      data: solicitudes,
    };
  }

  async findOne(id: number) {
    const solicitud = await this.solicitudesRepo.findOne({
      where: { id },
      relations: ['idUsuarioSolicitante', 'detalleSolicituds', 'entregaMaterials'],
    });
    return {
      message: 'Solicitud encontrada',
      data: solicitud,
    };
  }

  async update(id: number, data: Partial<Solicitudes>) {
    await this.solicitudesRepo.update(id, data);
    const actualizada = await this.solicitudesRepo.findOneBy({ id });
    return {
      message: 'Solicitud actualizada correctamente',
      data: actualizada,
    };
  }

  async remove(id: number) {
    await this.solicitudesRepo.delete(id);
    return {
      message: 'Solicitud eliminada correctamente',
    };
  }
}
