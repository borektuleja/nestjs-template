import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { plainToInstance } from "class-transformer";

import type { Repository } from "typeorm";

import CompetitorDto from "../dtos/competitor.dto";
import type CreateCompetitorDto from "../dtos/create-competitor.dto";
import type UpdateCompetitorDto from "../dtos/update-competitor.dto";
import Competitor from "../entities/competitor.entity";

@Injectable()
export default class CompetitorService {
	public constructor(
		@InjectRepository(Competitor)
		private readonly _competitorRepository: Repository<Competitor>,
	) {}

	public async readAll(): Promise<CompetitorDto[]> {
		const entities = await this._competitorRepository.find({
			order: { id: "ASC" },
		});
		return plainToInstance(CompetitorDto, entities);
	}

	public async create(dto: CreateCompetitorDto): Promise<void> {
		const entity = new Competitor();
		entity.fullName = dto.fullName;
		entity.email = dto.email;
		await this._competitorRepository.save(entity);
	}

	public async update(id: number, dto: UpdateCompetitorDto): Promise<void> {
		await this._competitorRepository.update(
			{ id },
			{
				fullName: dto.fullName,
				email: dto.email,
			},
		);
	}
}
