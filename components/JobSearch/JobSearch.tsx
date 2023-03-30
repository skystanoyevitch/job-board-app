import { useState } from "react";
import { JobSearchForm } from "./JobSearchForm";
// import { JobSearchResults } from "./JobSearchResults";

//type imports
import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearch({
  queryTitle,
  handleClick,
  titleSearchResults,
  tagState,
}: IJobSearchProps) {
  return (
    <div>
      <JobSearchForm
        queryTitle={queryTitle}
        titleSearchResults={titleSearchResults}
        handleClick={handleClick}
        tagState={tagState}
      />
      {/* <JobSearchResults /> */}
    </div>
  );
}
