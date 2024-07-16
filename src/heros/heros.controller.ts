import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
// import { get } from 'http';
import { HerosService } from './heros.service';

@Controller('heros')
export class HerosController {
  constructor(private readonly heroService: HerosService) {}
  @Get('')
  getHeros() {
    return this.heroService.getHeros();
  }
  @Get('')
  getHero() {
    return this.heroService.getHero();
  }
  @Post('')
  createHero(@Body() hero) {
    return this.heroService.createHero(hero);
  }  
  @Put('')
  editHero() { 
    return this.heroService.editHero();
  }
  @Delete('')
  deleteHero() {
    return this.heroService.deleteHero();
  }
}
