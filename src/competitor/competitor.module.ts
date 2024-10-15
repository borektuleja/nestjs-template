import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import CompetitorController from "./controllers/competitor.controller";
import Competitor from "./entities/competitor.entity";
import CompetitorService from "./services/competitor.service";

@Module({
	imports: [TypeOrmModule.forFeature([Competitor])],
	controllers: [CompetitorController],
	providers: [CompetitorService],
})
export default class CompetitorModule {}
