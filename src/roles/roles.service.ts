import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/Roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepo: Repository<Roles>,
  ) {}

  async create(data: Partial<Roles>) {
    const nuevo = await this.rolesRepo.save(data);
    return {
      message: 'Rol creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const roles = await this.rolesRepo.find({
      relations: ['accesos', 'usuarios'],
    });
    return {
      message: 'Listado de roles',
      data: roles,
    };
  }

  async findOne(id: number) {
    const rol = await this.rolesRepo.findOne({
      where: { id },
      relations: ['accesos', 'usuarios'],
    });
    return {
      message: 'Rol encontrado',
      data: rol,
    };
  }

  async update(id: number, data: Partial<Roles>) {
    await this.rolesRepo.update(id, data);
    const actualizado = await this.rolesRepo.findOneBy({ id });
    return {
      message: 'Rol actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.rolesRepo.delete(id);
    return {
      message: 'Rol eliminado correctamente',
    };
  }
}
