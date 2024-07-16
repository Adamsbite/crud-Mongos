import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Hero>;

@Schema()
export default class Hero {
  @Prop()
  name: string;

  @Prop()
  realName: string;

  @Prop()
  isAvenger: boolean;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
