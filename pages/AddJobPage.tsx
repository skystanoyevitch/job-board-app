import { AddJobForm } from "@/components/addJob/AddJobForm";
import React, { useState } from "react";
export interface IAddJobPageProps {}
import { createJobType } from "@/types/mongodb.connect";

// export type createJobType = {
//   title: string;
//   remote: boolean;
//   experience: boolean;
//   employmentType: boolean;
//   companyName: string;
//   applicationUrl: string;
//   userEmail: string;
// };

const createJob: createJobType = {
  title: "",
  remote: false,
  experience: false,
  employmentType: false,
  companyName: "",
  applicationUrl: "",
  userEmail: "",
};

export default function AddJobPage(props: IAddJobPageProps) {
  const [editor, setEditor] = useState("");
  const [job, setJob] = useState(createJob);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("button clicked!");

    const newJob = {
      title: job.title,
      remote: job.remote,
      experience: job.experience,
      employmentType: job.employmentType,
      companyName: job.companyName,
      applicationUrl: job.applicationUrl,
      userEmail: job.userEmail,
    };
    const response = await fetch("http://localhost:3000/api/jobs", {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        Accept: "contentType",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <section className="container mx-auto mt-20">
        <h1 className="text-center text-5xl font-black pb-20">
          Add a Job for free
        </h1>
        <AddJobForm
          handleSubmit={handleSubmit}
          job={job}
          setJob={setJob}
          // title={title}
          // setTitle={setTitle}
          // setRemote={setRemote}
          // setExperience={setExperience}
          // setEmploymentType={setEmploymentType}
          // remote={remote}
          // experience={experience}
          // employmentType={employmentType}
        />
      </section>
    </>
  );
}
