import { JobSearchForm } from "./JobSearchForm";
import { JobSearchResults } from "./JobSearchResults";

export interface IJobSearchProps {}

export function JobSearch(props: IJobSearchProps) {
  return (
    <div>
      <JobSearchForm />
      <JobSearchResults />
    </div>
  );
}
