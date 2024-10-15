import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import {
	ApiBody,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiTags,
} from "@nestjs/swagger";

import CompetitorDto from "../dtos/competitor.dto";
import CreateCompetitorDto from "../dtos/create-competitor.dto";
import UpdateCompetitorDto from "../dtos/update-competitor.dto";
// biome-ignore lint/style/useImportType: <explanation>
import CompetitorService from "../services/competitor.service";

@ApiTags("competitor")
@Controller("competitor")
export default class CompetitorController {
	public constructor(private readonly _competitorService: CompetitorService) {}

	@ApiOperation({ summary: "Reads all competitors." })
	@ApiOkResponse({ type: [CompetitorDto] })
	@Get()
	@HttpCode(HttpStatus.OK)
	public async readAll(): Promise<CompetitorDto[]> {
		return this._competitorService.readAll();
	}

	@ApiOperation({ summary: "Creates a competitor." })
	@ApiBody({ type: CreateCompetitorDto })
	@Post()
	@HttpCode(HttpStatus.CREATED)
	public async create(@Body() dto: CreateCompetitorDto): Promise<void> {
		return this._competitorService.create(dto);
	}

	@ApiOperation({ summary: "Partially updates a competitor." })
	@ApiParam({ name: "id", type: Number })
	@ApiBody({ type: UpdateCompetitorDto })
	@Patch(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	public async update(
		@Param("id") id: number,
		@Body() dto: UpdateCompetitorDto,
	): Promise<void> {
		return this._competitorService.update(id, dto);
	}
}
