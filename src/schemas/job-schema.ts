export interface JobSchemaCore {
  companyId: string;
  companyName: string;
  role: string;
  rating?: number;
  type: string;
  location: string;
  website?: string;
  benefits?: string;
  description: string;
  salary?: number;
  hours?: number;
  applicants: string[];
  stages: string[];
}

export interface JobSchema extends JobSchemaCore {
  id: string;
  //   createdAt: string;
  //   updatedAt: string;
}
