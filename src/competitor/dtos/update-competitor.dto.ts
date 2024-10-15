import { ApiPropertyOptional } from "@nestjs/swagger";

import { Expose } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

import type UpdateCompetitorType from "../types/update-competitor.type";

export default class UpdateCompetitorDto implements UpdateCompetitorType {
	@ApiPropertyOptional({ type: String })
	@Expose()
	@IsOptional()
	@IsString()
	@MinLength(4)
	public fullName?: string;

	@ApiPropertyOptional({ required: false, type: String })
	@Expose()
	@IsOptional()
	@IsEmail()
	public email?: string;
}
