import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichasFormacion } from './entities/FichasFormacion.entity';

@Injectable()
export class FichasFormacionService {
  constructor(
    @InjectRepository(FichasFormacion)
    private readonly fichasRepo: Repository<FichasFormacion>,
  ) {}

  async create(data: Partial<FichasFormacion>) {
    const nuevaFicha = await this.fichasRepo.save(data);
    return {
      message: 'Ficha de formación registrada correctamente',
      data: nuevaFicha,
    };
  }

  async findAll() {
    const fichas = await this.fichasRepo.find({
      relations: ['idTitulado', 'usuarios'],
    });
    return {
      message: 'Listado de fichas de formación',
      data: fichas,
    };
  }

  async findOne(id: number) {
    const ficha = await this.fichasRepo.findOne({
      where: { id },
      relations: ['idTitulado', 'usuarios'],
    });
    return {
      message: 'Ficha de formación encontrada',
      data: ficha,
    };
  }

  async update(id: number, data: Partial<FichasFormacion>) {
    await this.fichasRepo.update(id, data);
    const actualizada = await this.fichasRepo.findOneBy({ id });
    return {
      message: 'Ficha de formación actualizada correctamente',
      data: actualizada,
    };
  }

  async remove(id: number) {
    await this.fichasRepo.delete(id);
    return {
      message: 'Ficha de formación eliminada correctamente',
    };
  }
}
