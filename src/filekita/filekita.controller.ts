import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FilekitaDto } from './filekita.dto';

@Controller('filekita')
export class FilekitaController {
  constructor(private filekitaService: FilekitaService) {}

  // @Get('service')
  // getOutputFromService() {
  //   return this.filekitaService.showService();
  // }

  @Get()
  getOutputFromServiceAll() {
    return this.filekitaService.showAll();
  }

  @Get('/:id')
  getOutputWithid(@Param('id') id: number) {
    return this.filekitaService.getById(id);
  }

  @Post()
  makePost(@Body() data: FilekitaDto) {
    return this.filekitaService.create(data);
  }

  @Put('/:id')
  makePut(@Param('id') id: number, @Body() data: FilekitaDto) {
    return this.filekitaService.update(id, data);
  }

  @Delete('/:id')
  makeDelete(@Param('id') id: number) {
    return this.filekitaService.delete(id);
  }
}
