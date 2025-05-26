import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sedes } from './entities/Sedes.entity';

@Injectable()
export class SedesService {
  constructor(
    @InjectRepository(Sedes)
    private readonly sedesRepo: Repository<Sedes>,
  ) {}

  async create(data: Partial<Sedes>) {
    const nueva = await this.sedesRepo.save(data);
    return {
      message: 'Sede creada correctamente',
      data: nueva,
    };
  }

  async findAll() {
    const sedes = await this.sedesRepo.find({
      relations: ['idCentroFormacion'],
    });
    return {
      message: 'Listado de sedes',
      data: sedes,
    };
  }

  async findOne(id: number) {
    const sede = await this.sedesRepo.findOne({
      where: { id },
      relations: ['idCentroFormacion'],
    });
    return {
      message: 'Sede encontrada',
      data: sede,
    };
  }

  async update(id: number, data: Partial<Sedes>) {
    await this.sedesRepo.update(id, data);
    const actualizada = await this.sedesRepo.findOneBy({ id });
    return {
      message: 'Sede actualizada correctamente',
      data: actualizada,
    };
  }

  async remove(id: number) {
    await this.sedesRepo.delete(id);
    return {
      message: 'Sede eliminada correctamente',
    };
  }
}
