import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import type CompetitorType from "../types/competitor.type";

@Entity()
export default class Competitor implements CompetitorType {
	@PrimaryGeneratedColumn("increment")
	public id: number;

	@Column("varchar")
	public fullName: string;

	@Column("varchar")
	public email: string;
}
