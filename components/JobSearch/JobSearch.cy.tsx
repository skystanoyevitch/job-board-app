import React from "react";
import { JobSearch } from "./JobSearch";
import { IJobSearchProps } from "@/types/jobTypes";

const JobSearchTypes: IJobSearchProps = {
  queryTitle: "",
  titleSearchResults: () => {},
  handleClick: () => {},
};

describe("<JobSearch />", () => {
  // const queryTitle = ""
  // const titleSearchResults = (e: any) => ();
  // const handleClick = (tagName: any) => ()

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <JobSearch
        queryTitle={JobSearchTypes.queryTitle}
        titleSearchResults={JobSearchTypes.titleSearchResults}
        handleClick={JobSearchTypes.handleClick}
      />
    );
  });
});
