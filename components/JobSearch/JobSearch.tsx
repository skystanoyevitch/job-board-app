import { useState } from "react";
import { JobSearchForm } from "./JobSearchForm";
import { JobSearchResults } from "./JobSearchResults";

export interface IJobSearchProps {}

export function JobSearch(props: IJobSearchProps) {
  // const [title, setTitle] = useState("");
  return (
    <div>
      <JobSearchForm />
      <JobSearchResults />
    </div>
  );
}
