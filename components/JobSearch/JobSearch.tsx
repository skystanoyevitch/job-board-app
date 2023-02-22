import { useState } from "react";
import { JobSearchForm } from "./JobSearchForm";
import { JobSearchResults } from "./JobSearchResults";

//type imports
import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearch({
  queryTitle,

  titleSearchResults,
}: IJobSearchProps) {
  return (
    <div>
      <JobSearchForm
        queryTitle={queryTitle}
        titleSearchResults={titleSearchResults}
      />
      <JobSearchResults />
    </div>
  );
}
