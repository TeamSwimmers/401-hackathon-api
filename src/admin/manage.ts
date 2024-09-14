// FILE NOT ACCESSIBLE BY API
// NO INPUT VALIDATION ON THIS FILE

import { api_db as api, auth_db as auth } from "../db-client";
import { JobSchema, JobSchemaCore } from "../schemas/job-schema";
import { COMPANIES, JOBS } from "./data";
import { createId } from "@paralleldrive/cuid2";

async function add_company(name: string, tags?: string[]) {
  const id = createId();
  await auth.company.create({ data: { id, name, tags } });
  console.log(
    `Created:\n\tName: ${name}\n\tID: ${id}${tags ? `\n\tTags: ${tags}` : ""}`
  );
}

async function add_all_companies(
  company_list: { name: string; tags: string[] }[]
) {
  const companies: { id: string; name: string; tags: string[] }[] = [];
  for (const i in company_list) {
    companies.push({ id: createId(), ...company_list[i] });
  }
  await auth.company.createMany({ data: companies });
}

async function add_all_jobs(jobs_list: JobSchemaCore[]) {
  const jobs: JobSchema[] = [];
  for (const i in jobs_list) {
    jobs.push({ id: createId(), ...jobs_list[i] });
  }
  await api.job.createMany({ data: jobs });
}
