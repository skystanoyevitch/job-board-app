import Head from "next/head";
import { JobSearch } from "@/components/JobSearch/JobSearch";
import { getJobs } from "./api/jobs";
// import Image from "next/image";
import { useState } from "react";

export default function Home({ jobs }: any) {
  const [queryParams, setQueryParams] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleChange = (e: any) => {
    setQueryParams(e.target.value);
    // console.log(queryParams);

    const getFilter = jobs.filter((job: any) => {
      if (queryParams === "") return;
      return job.title.toLowerCase().includes(queryParams.toLowerCase());
    });

    setFilteredJobs(getFilter);
  };

  // console.log(filteredJobs);

  // console.log(jobs);
  return (
    <>
      <Head>
        <title>Latest Tech Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-black">FIND THE LATEST TECH JOBS</h1>
          <h3>Job Board curated for developers</h3>
        </div>
        <JobSearch
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          handleChange={handleChange}
        />
        <div className="container mx-auto w-1/2">
          <ul>
            {queryParams === ""
              ? "no matching search query"
              : !filteredJobs.length
              ? "your list did not return any results"
              : filteredJobs.map((job: any) => (
                  <div key={job._id} className="collapse border collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title">
                      <div className="text-sm text-blue-500">
                        {job.company.name}
                      </div>

                      {/* {job.company.logoUrl && (
                  // <Image
                  //   src={`/${job.company.logoUrl.name}`}
                  //   alt="default"
                  //   height={100}
                  //   width={100}
                  // />
                  // <div className="h-30 w-30">
                  //   <img src={job.company.logoUrl} alt="default" />
                  // </div>
                )} */}
                      <h1 className="text-xl font-semibold text-gray-700 pb-2">
                        {job.title}
                      </h1>
                      <div className="space-x-4">
                        {job.remote && (
                          <span className=" lg:px-[.3em] border-2 border-cyan-500 rounded-md text-cyan-500 text-sm">
                            remote
                          </span>
                        )}
                        {job.experience === "part time" && (
                          <span className=" lg:px-[.3em] border-2 border-indigo-500 rounded-md text-indigo-500 text-sm">
                            part time
                          </span>
                        )}
                        {job.employmentType === "entry level" && (
                          <span className=" lg:px-[.3em] border-2 border-cyan-500 rounded-md text-cyan-500 text-sm">
                            entry level
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className="collapse-content"
                      dangerouslySetInnerHTML={{ __html: job.jobDescription }}
                    ></div>
                  </div>
                ))}
          </ul>

          {!filteredJobs.length && (
            <div>
              {jobs?.map((job: any, index: any) => (
                <div key={index} className="collapse border collapse-arrow p-4">
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <div className="text-sm font-semibold text-blue-500">
                      {job.company.name}
                    </div>

                    {/* {job.company.logoUrl && (
                  // <Image
                  //   src={`/${job.company.logoUrl.name}`}
                  //   alt="default"
                  //   height={100}
                  //   width={100}
                  // />
                  // <div className="h-30 w-30">
                  //   <img src={job.company.logoUrl} alt="default" />
                  // </div>
                )} */}
                    <h1 className="text-2xl font-semibold text-gray-700 pb-2">
                      {job.title}
                    </h1>
                    <div className="space-x-4">
                      {job.remote && (
                        <span className=" lg:px-[.4em] lg:py-[.3em] rounded-md bg-cyan-500 text-sm">
                          remote
                        </span>
                      )}
                      {job.experience === "part time" && (
                        <span className=" lg:px-[.4em] lg:py-[.3em] bg-indigo-500 rounded-md text-sm">
                          part time
                        </span>
                      )}
                      {job.employmentType === "entry level" && (
                        <span className=" lg:px-[.4em] lg:py-[.3em] rounded-md bg-cyan-500 text-sm">
                          entry level
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="collapse-content">
                    <div
                      className="pt-8"
                      dangerouslySetInnerHTML={{ __html: job.jobDescription }}
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
          )}
        </div>
        {/* <Image src={"/default-logo.jpg"} alt="default" height={130} width={130} /> */}
        <a href="https://www.servicenow.com/" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-outline btn-primary">
            APPLY NOW
          </button>
        </a>
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
