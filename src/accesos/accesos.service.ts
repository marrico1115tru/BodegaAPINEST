import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accesos } from './entities/Accesos.entity';

@Injectable()
export class AccesosService {
  constructor(
    @InjectRepository(Accesos)
    private readonly accesosRepository: Repository<Accesos>,
  ) {}

  async create(data: Partial<Accesos>) {
    const nuevoAcceso = await this.accesosRepository.save(data);
    return {
      message: 'Acceso creado correctamente',
      data: nuevoAcceso,
    };
  }

  async findAll() {
    const accesos = await this.accesosRepository.find({
      relations: ['idOpcion', 'idRol'],
    });
    return {
      message: 'Listado de accesos',
      data: accesos,
    };
  }

  async findOne(id: number) {
    const acceso = await this.accesosRepository.findOne({
      where: { id },
      relations: ['idOpcion', 'idRol'],
    });
    return {
      message: 'Acceso encontrado',
      data: acceso,
    };
  }

  async update(id: number, data: Partial<Accesos>) {
    await this.accesosRepository.update(id, data);
    const actualizado = await this.accesosRepository.findOneBy({ id });
    return {
      message: 'Acceso actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.accesosRepository.delete(id);
    return {
      message: 'Acceso eliminado correctamente',
    };
  }
}
