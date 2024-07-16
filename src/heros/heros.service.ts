import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Hero from './schemas/hero.schemas';

@Injectable()
export class HerosService {
  constructor(
    @InjectModel(Hero.name) private heroModel: mongoose.Model<Hero>,
  ) {}
  async getHeros() {
    const heros = await this.heroModel.find();
    return heros;
  }
  getHero() {
    return { message: 'single hero' };
  }
  async createHero(heroDetails) {
    console.log(heroDetails);

    const hero = await this.heroModel.create(heroDetails);
    return hero;
  }

  editHero() {
    return { message: 'Edit hero' };
  }
  deleteHero() {
    return { message: 'delete hero' };
  }
}
