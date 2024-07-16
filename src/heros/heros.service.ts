import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Hero from './schemas/hero.schemas';

@Injectable()
export class HerosService {
  constructor(
    @InjectModel(Hero.name) private heroModel: mongoose.Model<Hero>,
  ) {}
  getHeros() {
    return { message: 'All Heroes' };
  }
  getHero() {
    return { message: 'single hero' };
  }
  createHero(heroDetails) {
    console.log(heroDetails);
    return { message: 'Create hero' };
  }

  editHero() {
    return { message: 'Edit hero' };
  }
  deleteHero() {
    return { message: 'delete hero' };
  }
}
