import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Areas } from './entities/Areas.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Areas)
    private readonly areasRepository: Repository<Areas>,
  ) {}

  async create(data: Partial<Areas>) {
    const nuevaArea = await this.areasRepository.save(data);
    return {
      message: 'Área registrada correctamente',
      data: nuevaArea,
    };
  }

  async findAll() {
    const areas = await this.areasRepository.find({
      relations: ['fkSitio', 'idCentroFormacion', 'productos', 'usuarios'],
    });
    return {
      message: 'Listado de áreas',
      data: areas,
    };
  }

  async findOne(id: number) {
    const area = await this.areasRepository.findOne({
      where: { id },
      relations: ['fkSitio', 'idCentroFormacion', 'productos', 'usuarios'],
    });
    return {
      message: 'Área encontrada',
      data: area,
    };
  }

  async update(id: number, data: Partial<Areas>) {
    await this.areasRepository.update(id, data);
    const actualizada = await this.areasRepository.findOneBy({ id });
    return {
      message: 'Área actualizada correctamente',
      data: actualizada,
    };
  }

  async remove(id: number) {
    await this.areasRepository.delete(id);
    return {
      message: 'Área eliminada correctamente',
    };
  }
}
