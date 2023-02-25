import { AddJobForm } from "@/components/addJob/AddJobForm";
import React, { useState } from "react";
export interface IAddJobPageProps {}
import { createJobType } from "@/types/mongodb.connect";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { useRouter } from "next/router";

const createJob: createJobType = {
  title: "",
  remote: false,
  experience: "",
  employmentType: "",
  jobDescription: () => EditorState.createEmpty(),
  jobLocation: [],
  company: { name: "", logoUrl: null },
  applicationUrl: "",
  userEmail: "",
};

export default function AddJobPage(props: IAddJobPageProps) {
  const [editor, setEditor] = useState(() => EditorState.createEmpty());
  const [job, setJob] = useState(createJob);
  const [errorMessage, setErrorMessage] = useState("");
  const html = convertToHTML(editor.getCurrentContent());

  console.log(typeof job.jobDescription);

  const router = useRouter();
  const homePageUrl = "/";

  const newJob = {
    title: job.title,
    remote: job.remote,
    experience: job.experience,
    employmentType: job.employmentType,
    jobDescription: html,
    jobLocation: job.jobLocation,
    company: job.company,
    applicationUrl: job.applicationUrl,
    userEmail: job.userEmail,
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      new URL(job.applicationUrl);
      return true;
    } catch (error) {
      console.log(error);
    }

    // validate form fields before submitting //
    if (
      job.title !== "" &&
      job.experience !== "" &&
      job.employmentType !== "" &&
      job.jobDescription === undefined &&
      Object.values(job.company.name !== "") &&
      new URL(job.applicationUrl)
    ) {
      const response = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        body: JSON.stringify(newJob),
        headers: {
          Accept: "contentType",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(typeof data);

      router.push({ pathname: homePageUrl, query: { name: html } });
    } else {
      setErrorMessage("Please fill in this field");
      globalThis.scrollTo(0, 0);
    }
  };

  return (
    <>
      <section className="container mx-auto mt-20">
        <h1 className="text-center text-5xl font-black pb-20">
          Add a job posting for free!
        </h1>
        <AddJobForm
          handleSubmit={handleSubmit}
          job={job}
          setJob={setJob}
          editor={editor}
          setEditor={setEditor}
          errorMessage={errorMessage}
        />
      </section>
    </>
  );
}
