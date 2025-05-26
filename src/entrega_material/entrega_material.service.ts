import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntregaMaterial } from './entities/EntregaMaterial.entity';

@Injectable()
export class EntregaMaterialService {
  constructor(
    @InjectRepository(EntregaMaterial)
    private readonly entregaRepo: Repository<EntregaMaterial>,
  ) {}

  async create(data: Partial<EntregaMaterial>) {
    const nuevo = await this.entregaRepo.save(data);
    return {
      message: 'Entrega de material registrada correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const entregas = await this.entregaRepo.find({
      relations: ['idSolicitud', 'idUsuarioResponsable'],
    });
    return {
      message: 'Listado de entregas de material',
      data: entregas,
    };
  }

  async findOne(id: number) {
    const entrega = await this.entregaRepo.findOne({
      where: { id },
      relations: ['idSolicitud', 'idUsuarioResponsable'],
    });
    return {
      message: 'Entrega de material encontrada',
      data: entrega,
    };
  }

  async update(id: number, data: Partial<EntregaMaterial>) {
    await this.entregaRepo.update(id, data);
    const actualizado = await this.entregaRepo.findOneBy({ id });
    return {
      message: 'Entrega de material actualizada correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.entregaRepo.delete(id);
    return {
      message: 'Entrega de material eliminada correctamente',
    };
  }
}
