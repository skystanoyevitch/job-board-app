import { useState } from "react";
import { JobSearchForm } from "./JobSearchForm";
import { JobSearchResults } from "./JobSearchResults";

//type imports
import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearch({
  queryParams,
  setQueryParams,
  handleChange,
}: IJobSearchProps) {
  return (
    <div>
      <JobSearchForm
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        handleChange={handleChange}
      />
      <JobSearchResults />
    </div>
  );
}
