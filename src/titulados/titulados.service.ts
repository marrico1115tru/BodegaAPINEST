import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Titulados } from './entities/Titulados.entity';

@Injectable()
export class TituladosService {
  constructor(
    @InjectRepository(Titulados)
    private readonly tituladosRepo: Repository<Titulados>,
  ) {}

  async create(data: Partial<Titulados>) {
    const nuevo = await this.tituladosRepo.save(data);
    return {
      message: 'Titulado creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const list = await this.tituladosRepo.find({
      relations: ['fichasFormacions'],
    });
    return {
      message: 'Listado de titulados',
      data: list,
    };
  }

  async findOne(id: number) {
    const item = await this.tituladosRepo.findOne({
      where: { id },
      relations: ['fichasFormacions'],
    });
    return {
      message: 'Titulado encontrado',
      data: item,
    };
  }

  async update(id: number, data: Partial<Titulados>) {
    await this.tituladosRepo.update(id, data);
    const actualizado = await this.tituladosRepo.findOneBy({ id });
    return {
      message: 'Titulado actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.tituladosRepo.delete(id);
    return {
      message: 'Titulado eliminado correctamente',
    };
  }
}
