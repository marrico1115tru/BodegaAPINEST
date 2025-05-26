import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Opciones } from './entities/Opciones.entity';

@Injectable()
export class OpcionesService {
  constructor(
    @InjectRepository(Opciones)
    private readonly opcionesRepo: Repository<Opciones>,
  ) {}

  async create(data: Partial<Opciones>) {
    const nueva = await this.opcionesRepo.save(data);
    return {
      message: 'Opción registrada correctamente',
      data: nueva,
    };
  }

  async findAll() {
    const opciones = await this.opcionesRepo.find({
      relations: ['accesos'],
    });
    return {
      message: 'Listado de opciones',
      data: opciones,
    };
  }

  async findOne(id: number) {
    const opcion = await this.opcionesRepo.findOne({
      where: { id },
      relations: ['accesos'],
    });
    return {
      message: 'Opción encontrada',
      data: opcion,
    };
  }

  async update(id: number, data: Partial<Opciones>) {
    await this.opcionesRepo.update(id, data);
    const actualizada = await this.opcionesRepo.findOneBy({ id });
    return {
      message: 'Opción actualizada correctamente',
      data: actualizada,
    };
  }

  async remove(id: number) {
    await this.opcionesRepo.delete(id);
    return {
      message: 'Opción eliminada correctamente',
    };
  }
}
