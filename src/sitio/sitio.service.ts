import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sitio } from './entities/Sitio.entity';

@Injectable()
export class SitioService {
  constructor(
    @InjectRepository(Sitio)
    private readonly sitioRepo: Repository<Sitio>,
  ) {}

  async create(data: Partial<Sitio>) {
    const nuevo = await this.sitioRepo.save(data);
    return {
      message: 'Sitio creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const sitios = await this.sitioRepo.find({
      relations: ['idTipoSitio', 'areas'],
    });
    return {
      message: 'Listado de sitios',
      data: sitios,
    };
  }

  async findOne(id: number) {
    const sitio = await this.sitioRepo.findOne({
      where: { id },
      relations: ['idTipoSitio', 'areas'],
    });
    return {
      message: 'Sitio encontrado',
      data: sitio,
    };
  }

  async update(id: number, data: Partial<Sitio>) {
    await this.sitioRepo.update(id, data);
    const actualizado = await this.sitioRepo.findOneBy({ id });
    return {
      message: 'Sitio actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.sitioRepo.delete(id);
    return {
      message: 'Sitio eliminado correctamente',
    };
  }
}
