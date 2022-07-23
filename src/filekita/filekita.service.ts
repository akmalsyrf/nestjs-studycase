import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity';
import { FilekitaDto } from './filekita.dto';

@Injectable()
export class FilekitaService {
  constructor(
    @InjectRepository(FileKita)
    private filekitaRepository: Repository<FileKita>,
  ) {}

  async showService() {
    return 'Ini service';
  }

  async showAll() {
    return await this.filekitaRepository.find();
  }

  async getById(id: number) {
    return await this.filekitaRepository.findOne({ where: { id } });
  }

  async create(data: FilekitaDto) {
    const newFilekita = await this.filekitaRepository.create(data);
    await this.filekitaRepository.save(newFilekita);
    return newFilekita;
  }

  async update(id: number, data: FilekitaDto) {
    await this.filekitaRepository.update(id, data);
    return await this.filekitaRepository.findOne({ where: { id } });
  }

  async delete(id: number) {
    await this.filekitaRepository.delete(id);
    return { deleted: true, id };
  }
}
