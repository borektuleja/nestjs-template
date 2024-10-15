import type CompetitorType from "./competitor.type";

type UpdateCompetitorType = Partial<Pick<CompetitorType, "fullName" | "email">>;

export default UpdateCompetitorType;
