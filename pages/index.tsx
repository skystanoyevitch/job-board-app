/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { JobSearch } from "@/components/JobSearch/JobSearch";
import { getJobs } from "./api/jobs";
// import Image from "next/image";
import { useState } from "react";
import { exit } from "process";

export default function Home({ jobs }: any) {
  const [queryTitle, setQueryTitle] = useState(jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [tagFilterState, setTagFilterState] = useState([]);
  const [tagState, setTagState] = useState({ id: 0, name: "", active: "" });
  const [tagStateFilters, setTagStateFilters] = useState(false);
  // const [employmentTypeTagState, setEmploymentTypeTagState] = useState([]);

  const titleSearchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueryTitle({ [name]: value, [name]: value });
    console.log(queryTitle.jobLocation);

    if (queryTitle.title !== "" || queryTitle.jobLocation !== "") {
      const getFilter = jobs.filter((job: any) => {
        const jobTitleSearch = job.title
          .toLowerCase()
          .includes(queryTitle.title?.toLowerCase());
        const jobLocationSearch = job.jobLocation?.map(
          (jobLocationString: any) => {
            jobLocationString
              .toLowerCase()
              .includes(queryTitle.jobLocation?.toLowerCase());
          }
        );
        if (queryTitle.title === "" || queryTitle.jobLocation === "") return;
        return jobTitleSearch || jobLocationSearch;
      });
      setFilteredJobs(getFilter);
    }
  };

  const handleClick = (tag: { id: number; name: string; active: string }) => {
    console.log(tag);
    setTagStateFilters(!tagStateFilters);

    console.log(tagStateFilters);

    if (tagStateFilters === true) {
      setTagState({ ...tag, active: "active" });
      const getTagFilters = jobs.filter((job: any) => {
        if (tag.name === job.experience) {
          return job.experience;
        } else if (tag.name === job.employmentType) {
          return job.employmentType;
        }
        return job.remote === true;
      });
      setTagFilterState(getTagFilters);
      console.log(getTagFilters);
    } else if (tagStateFilters === false) {
      setTagState({ ...tag, active: "" });
      exit;
    }

    console.log(jobs);
  };

  return (
    <>
      <Head>
        <title>Latest Tech Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-20 p-4 lg:p-0">
        <div className="md:text-center">
          <h1 className="text-3xl lg:text-6xl font-black pb-4">
            FIND THE LATEST TECH JOBS
          </h1>
          <h3 className="text-xl md:text-2xl">
            a job board curated for developers
          </h3>
        </div>
        <JobSearch
          queryTitle={queryTitle}
          titleSearchResults={titleSearchResults}
          handleClick={handleClick}
          tagState={tagState}
        />
        <div className="container mx-auto lg:w-1/2">
          <ul className="">
            {queryTitle.title || queryTitle.jobLocation ? (
              filteredJobs.map((job: any) => (
                <div
                  key={job._id}
                  className="collapse border collapse-arrow my-4"
                >
                  <input type="checkbox" className="" />
                  <div className="collapse-title">
                    <div className="text-sm text-blue-500">
                      {job.company.name}
                    </div>
                    <h1 className="text-xl font-semibold text-gray-700 pb-2 dark:text-white">
                      {job.title}
                    </h1>
                    <h3 className="text-sm">{job.jobLocation}</h3>
                    <div className="space-x-4">
                      {job.remote && (
                        <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-200 text-xs text-cyan-800">
                          remote
                        </span>
                      )}
                      {job.experience && (
                        <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] bg-indigo-200 rounded-full text-xs text-indigo-800 ">
                          {job.experience}
                        </span>
                      )}
                      {job.employmentType && (
                        <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-500 text-xs text-cyan-900">
                          {job.employmentType}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div
                      className="pt-8"
                      dangerouslySetInnerHTML={{
                        __html: job.jobDescription,
                      }}
                    ></div>
                    <div className="flex justify-between pt-6">
                      <a
                        href={job.applicationUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className="btn btn-outline btn-primary"
                        >
                          APPLY NOW
                        </button>
                      </a>
                      <button type="button" className="btn btn-outline">
                        MORE INFO
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : tagStateFilters && tagFilterState.length >= 1 ? (
              <div>
                {tagFilterState.map((job: any) => (
                  <div
                    key={job._id}
                    className="collapse border collapse-arrow my-4"
                  >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title peer-checked:border-2 peer-hover:border-2">
                      <div className="text-sm text-blue-500">
                        {job.company.name}
                      </div>
                      <h1 className="text-xl font-semibold text-gray-700 pb-2 dark:text-white">
                        {job.title}
                      </h1>
                      <h3 className="text-sm">{job.jobLocation}</h3>
                      <div className="space-x-4">
                        {job.remote && (
                          <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-200 text-xs text-cyan-800">
                            remote
                          </span>
                        )}
                        {job.experience && (
                          <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] bg-indigo-200 rounded-full text-xs text-indigo-800 ">
                            {job.experience}
                          </span>
                        )}
                        {job.employmentType && (
                          <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-500 text-xs text-cyan-900">
                            {job.employmentType}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="collapse-content peer-checked:bg-gray-50 dark:text-black ">
                      <div
                        className="pt-8"
                        dangerouslySetInnerHTML={{
                          __html: job.jobDescription,
                        }}
                      ></div>
                      <div className="flex justify-between pt-6">
                        <a
                          href={job.applicationUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            type="button"
                            className="btn btn-outline btn-primary"
                          >
                            APPLY NOW
                          </button>
                        </a>
                        <button type="button" className="btn btn-outline">
                          MORE INFO
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !queryTitle.title &&
              !queryTitle.jobLocation && (
                <div className="mt-14">
                  {jobs.map((job: any, index: any) => (
                    <div
                      key={index}
                      className="collapse border collapse-arrow p-2 my-4"
                    >
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title peer-checked:border-2 peer-hover:border-2">
                        <div>
                          {job.company.logoUrl && (
                            <img
                              src={job.company.logoUrl}
                              alt="my logo"
                              className="h-12 w-12 rounded-full"
                            />
                          )}
                        </div>

                        <div className="text-sm font-regular text-blue-500">
                          {job.company.name}
                        </div>
                        <div className="pb-2">
                          <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
                            {job.title}
                          </h1>
                          <h3 className="text-sm">{job.jobLocation}</h3>
                        </div>

                        <div className="space-x-4">
                          {job.remote && (
                            <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-200 text-xs text-cyan-800">
                              remote
                            </span>
                          )}
                          {job.experience && (
                            <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] bg-indigo-200 rounded-full text-xs text-indigo-800 ">
                              {job.experience}
                            </span>
                          )}
                          {job.employmentType && (
                            <span className="px-2 py-1 lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-500 text-xs text-cyan-900">
                              {job.employmentType}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="collapse-content peer-checked:bg-gray-50 dark:text-black">
                        <div
                          className="pt-8"
                          dangerouslySetInnerHTML={{
                            __html: job.jobDescription,
                          }}
                        ></div>
                        <div className="flex justify-between pt-6">
                          <a
                            href={job.applicationUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              type="button"
                              className="btn btn-outline btn-primary"
                            >
                              APPLY NOW
                            </button>
                          </a>
                          <button type="button" className="btn btn-outline">
                            MORE INFO
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await getJobs();
    // console.log(data);
    return {
      props: { jobs: data },
    };
  } catch (e) {
    console.error(e);
  }
}
