import type CompetitorType from "./competitor.type";

type CreateCompetitorType = Pick<CompetitorType, "fullName" | "email">;

export default CreateCompetitorType;
