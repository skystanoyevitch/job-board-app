/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { JobSearch } from "@/components/JobSearch/JobSearch";
import { getJobs } from "./api/jobs";
import { useState } from "react";

export default function Home({ jobs }: any) {
  // console.log(jobs);
  const [queryTitle, setQueryTitle] = useState(jobs);
  const [tagState, setTagState] = useState(false);
  const [tagInfo, setTagInfo] = useState({ id: 0, name: "" });

  const titleSearchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setQueryTitle({ ...jobs, [name]: e.target.value, [name]: e.target.value });
  };

  const handleClick = (tag: { id: number; name: string }) => {
    console.log(tag);
    setTagState((prev) => !prev);
    setTagInfo({ ...tag, id: tag.id });
    console.log(tagState);
  };

  return (
    <>
      <Head>
        <title>Developer Tech Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-20 p-4 lg:p-0">
        <div className="md:text-center">
          <h1 className="text-3xl lg:text-6xl font-black bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-red-600 to-orange-400 pb-4">
            FIND THE LATEST TECH JOBS
          </h1>
          <h3 className="text-xl md:text-xl lg:text-2xl font-mono text-slate-600">
            A Job Board Curated for <span className="">Developers</span>
          </h3>
        </div>
        <JobSearch
          queryTitle={queryTitle}
          titleSearchResults={titleSearchResults}
          handleClick={handleClick}
          tagState={tagState}
          tagInfo={tagInfo}
          jobs={jobs}
        />
        <div className="container mx-auto lg:w-1/2">
          <ul>
            {!queryTitle.title && !queryTitle.jobLocation && tagState === false
              ? jobs.map((job: any) => (
                  <li key={job._id} className="">
                    <div className="collapse border collapse-arrow my-4">
                      <input type="checkbox" className="" />
                      <div className="collapse-title">
                        <div className="text-sm text-blue-500">
                          {job.company.name}
                        </div>
                        <h1 className="text-xl font-semibold text-gray-700 pb-2">
                          {job.title}
                        </h1>
                        <h3 className="text-sm">{job.jobLocation}</h3>
                        <div className="space-x-4">
                          {job.remote && (
                            <span className="px-2 py-[.3em] lg:px-[.7em] lg:py-[.3em] rounded-full bg-cyan-100 text-xs text-cyan-800">
                              remote
                            </span>
                          )}
                          {job.experience && (
                            <span className="px-2 py-[.3em] lg:px-[.7em] lg:py-[.3em] bg-orange-100 rounded-full text-xs text-orange-800 ">
                              {job.experience}
                            </span>
                          )}
                          {job.employmentType && (
                            <span className="px-2 py-[.3em] lg:px-[.7em] lg:py-[.3em] rounded-full bg-blue-100 text-xs text-blue-900">
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
                  </li>
                ))
              : jobs
                  .filter((job: any) => {
                    const filterTags =
                      job.remote === tagInfo.name ||
                      job.experience === tagInfo.name ||
                      job.employmentType === tagInfo.name;
                    return queryTitle.title === "" ||
                      queryTitle.jobLocation === ""
                      ? job
                      : job.title
                          ?.toLowerCase()
                          .includes(queryTitle.title?.toLowerCase()) ||
                          job.jobLocation
                            ?.toLowerCase()
                            .includes(queryTitle?.jobLocation?.toLowerCase()) ||
                          filterTags;
                  })
                  .map((job: any) => (
                    <li key={job._id}>
                      <div className="collapse border collapse-arrow my-4">
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
                      </div>{" "}
                    </li>
                  ))}
          </ul>
          {/* {tagState &&
            jobs
              .filter((job: any) => {
                return (
                  job.remote === tagInfo.name ||
                  job.experience === tagInfo.name ||
                  job.employmentType === tagInfo.name
                );
              })
              .map((job: any, i: any) => (
                <div key={i}>
                  <h1>{job.title}</h1>
                </div>
              ))} */}
          <ul>
            {/* {tags &&
              jobs
                .filter((item: any) => {
                  console.log(item, tags);
                  return (
                    item.remote === tags ||
                    item.experience === tags ||
                    item.employmentType === tags
                  );
                })
                .map((t: any, index: any) => (
                  <li key={index}>
                    <h1>{t}</h1>
                  </li>
                ))} */}
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
