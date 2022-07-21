import { Injectable } from '@nestjs/common';

@Injectable()
export class FilekitaService {
  async showAll() {
    return 'Ini service';
  }
}
