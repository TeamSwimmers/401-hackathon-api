// FILE NOT ACCESSIBLE BY API
// NO INPUT VALIDATION ON THIS FILE

import { api_db as api, auth_db as auth, auth_db } from "../db-client";
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

add_all_jobs(JOBS);

// async function testing() {
//   const data = await auth_db.company.findMany();
//   const ids = data.map((value) => value.id);
//   const names = data.map((value) => value.name);

//   const jobs_edited: any[] = [];
//   for (const i in JOBS) {
//     const index = ids.indexOf(JOBS[i].companyId);
//     jobs_edited.push({ companyName: names[i], ...JOBS[i] });
//   }
//   console.dir(jobs_edited, { maxArrayLength: null });
// }

// testing();
