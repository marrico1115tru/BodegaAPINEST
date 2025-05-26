import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productos } from './entities/Productos.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Productos)
    private readonly productosRepo: Repository<Productos>,
  ) {}

  async create(data: Partial<Productos>) {
    const nuevo = await this.productosRepo.save(data);
    return {
      message: 'Producto creado correctamente',
      data: nuevo,
    };
  }

  async findAll() {
    const productos = await this.productosRepo.find({
      relations: ['idArea', 'detalleSolicituds'],
    });
    return {
      message: 'Listado de productos',
      data: productos,
    };
  }

  async findOne(id: number) {
    const producto = await this.productosRepo.findOne({
      where: { id },
      relations: ['idArea', 'detalleSolicituds'],
    });
    return {
      message: 'Producto encontrado',
      data: producto,
    };
  }

  async update(id: number, data: Partial<Productos>) {
    await this.productosRepo.update(id, data);
    const actualizado = await this.productosRepo.findOneBy({ id });
    return {
      message: 'Producto actualizado correctamente',
      data: actualizado,
    };
  }

  async remove(id: number) {
    await this.productosRepo.delete(id);
    return {
      message: 'Producto eliminado correctamente',
    };
  }
}
