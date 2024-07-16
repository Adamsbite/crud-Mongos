import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { get } from 'http';
import { HerosService } from './heros.service';

@Controller('heros')
export class HerosController {
  constructor(private readonly heroService: HerosService) {}
  @Get('')
  getHeros() {
    return this.heroService.getHeros();
  }
  @Get(':id')
  getHero(@Param('id') id) {
    return this.heroService.getHero(id);
  }
  @Post('')
  createHero(@Body() hero) {
    return this.heroService.createHero(hero);
  }
  @Put(':id')
  editHero(@Param('id') id, @Body() hero) {
    return this.heroService.editHero(id, hero);
  }
  @Delete(':id')
  deleteHero(@Param('id') id) {
    return this.heroService.deleteHero(id);
  }
}
