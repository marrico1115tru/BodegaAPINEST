import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/Usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepo: Repository<Usuarios>,
  ) {}

  async create(data: Partial<Usuarios>) {
    const nuevo = await this.usuariosRepo.save(data);
    return {
      message: 'Usuario creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const list = await this.usuariosRepo.find({
      relations: ['idArea', 'idFicha2', 'idRol', 'entregaMaterials', 'solicitudes'],
    });
    return {
      message: 'Listado de usuarios',
      data: list,
    };
  }

  async findOne(id: number) {
    const item = await this.usuariosRepo.findOne({
      where: { id },
      relations: ['idArea', 'idFicha2', 'idRol', 'entregaMaterials', 'solicitudes'],
    });
    return {
      message: 'Usuario encontrado',
      data: item,
    };
  }

  async update(id: number, data: Partial<Usuarios>) {
    await this.usuariosRepo.update(id, data);
    const actualizado = await this.usuariosRepo.findOneBy({ id });
    return {
      message: 'Usuario actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.usuariosRepo.delete(id);
    return {
      message: 'Usuario eliminado correctamente',
    };
  }
}
