import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSitio } from './entities/TipoSitio.entity';

@Injectable()
export class TipoSitioService {
  constructor(
    @InjectRepository(TipoSitio)
    private readonly tipoSitioRepo: Repository<TipoSitio>,
  ) {}

  async create(data: Partial<TipoSitio>) {
    const nuevo = await this.tipoSitioRepo.save(data);
    return {
      message: 'Tipo de sitio creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const tipos = await this.tipoSitioRepo.find({
      relations: ['sitios'],
    });
    return {
      message: 'Listado de tipos de sitio',
      data: tipos,
    };
  }

  async findOne(id: number) {
    const tipo = await this.tipoSitioRepo.findOne({
      where: { id },
      relations: ['sitios'],
    });
    return {
      message: 'Tipo de sitio encontrado',
      data: tipo,
    };
  }

  async update(id: number, data: Partial<TipoSitio>) {
    await this.tipoSitioRepo.update(id, data);
    const actualizado = await this.tipoSitioRepo.findOneBy({ id });
    return {
      message: 'Tipo de sitio actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.tipoSitioRepo.delete(id);
    return {
      message: 'Tipo de sitio eliminado correctamente',
    };
  }
}
