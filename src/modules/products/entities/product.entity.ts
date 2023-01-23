import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@ObjectType()
@Schema()
export class Product {
	@Field(() => String)
	@Prop(String)
	title: string;

	@Field(() => String)
	@Prop(String)
	subtitle: string;
}
