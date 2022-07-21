import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
  constructor(private filekitaService: FilekitaService) {}
  @Get()
  getOutput(): string {
    return 'Hello dunia!';
  }

  @Get(':name')
  getOutputWithName(@Param('name') name: string): string {
    return `Hello ${name}`;
  }

  @Get('service')
  getOutputFromService() {
    return this.filekitaService.showAll();
  }
}
