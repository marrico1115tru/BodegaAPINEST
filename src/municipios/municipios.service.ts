import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipios } from './entities/Municipios.entity';

@Injectable()
export class MunicipiosService {
  constructor(
    @InjectRepository(Municipios)
    private readonly municipioRepo: Repository<Municipios>,
  ) {}

  async findAll(): Promise<Municipios[]> {
    return this.municipioRepo.find({ relations: ['centroformacions'] });
  }

  async findOne(id: number): Promise<Municipios> {
    const municipio = await this.municipioRepo.findOne({
      where: { id },
      relations: ['centroformacions'],
    });

    if (!municipio) throw new NotFoundException('Municipio no encontrado');
    return municipio;
  }

  async create(data: Partial<Municipios>): Promise<Municipios> {
    const nuevo = this.municipioRepo.create(data);
    return this.municipioRepo.save(nuevo);
  }

  async update(id: number, data: Partial<Municipios>): Promise<Municipios> {
    // Excluir 'centroformacions' antes de hacer update
    const { centroformacions, ...cleanData } = data;

    // Verificar si el municipio existe
    const municipio = await this.municipioRepo.findOne({ where: { id } });
    if (!municipio) throw new NotFoundException('Municipio no encontrado');

    // Actualizar solo los campos válidos
    await this.municipioRepo.update(id, cleanData);

    // Opcional: manejar centroformacions si se desea actualizar
    // if (centroformacions) {
    //   municipio.centroformacions = centroformacions;
    //   await this.municipioRepo.save(municipio);
    // }

    return this.findOne(id); // Devolver municipio actualizado con relaciones
  }

  async remove(id: number): Promise<void> {
    const municipio = await this.municipioRepo.findOne({ where: { id } });
    if (!municipio) throw new NotFoundException('Municipio no encontrado');
    await this.municipioRepo.delete(id);
  }
}
