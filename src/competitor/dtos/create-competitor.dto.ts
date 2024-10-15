import { ApiProperty } from "@nestjs/swagger";

import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

import type CreateCompetitorType from "../types/create-competitor.type";

@Exclude()
export default class CreateCompetitorDto implements CreateCompetitorType {
	@ApiProperty({ type: String })
	@Expose()
	@IsString()
	@MinLength(4)
	public fullName: string;

	@ApiProperty({ type: String })
	@Expose()
	@IsEmail()
	public email: string;
}
