import { ApiProperty } from "@nestjs/swagger";

import { Exclude, Expose } from "class-transformer";

import type CompetitorType from "../types/competitor.type";

@Exclude()
export default class CompetitorDto implements CompetitorType {
	@ApiProperty({ type: Number })
	@Expose()
	public id: number;

	@ApiProperty({ type: String })
	@Expose()
	public fullName: string;

	@ApiProperty({ type: String })
	@Expose()
	public email: string;
}
