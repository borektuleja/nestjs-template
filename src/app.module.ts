import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import CompetitorModule from "./competitor/competitor.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			autoLoadEntities: true,
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "root",
			database: "database",
			synchronize: true,
		}),
		CompetitorModule,
	],
})
export default class AppModule {}
