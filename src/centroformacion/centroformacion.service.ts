import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Centroformacion } from './entities/Centroformacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CentroformacionService {
  constructor(
    @InjectRepository(Centroformacion)
    private readonly repo: Repository<Centroformacion>,
  ) {}

  findAll() {
    return this.repo.find({ relations: ['idMunicipio', 'areas', 'sedes'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['idMunicipio', 'areas', 'sedes'],
    });
  }

  create(data: Centroformacion) {
    return this.repo.save(data);
  }

  async update(id: number, data: Centroformacion) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    if (!item) {
      throw new NotFoundException(`Centroformacion con id ${id} no encontrado`);
    }
    return this.repo.remove(item);
  }
}
