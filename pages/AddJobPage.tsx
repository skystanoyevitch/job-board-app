import { AddJobForm } from "@/components/addJob/AddJobForm";
import React, { useEffect, useState } from "react";
export interface IAddJobPageProps {}
import { createJobType } from "@/types/mongodb.connect";
import { convertFromRaw, EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { convertToHTML } from "draft-convert";
import { getJobs } from "./api/jobs";
import { useRouter } from "next/router";
const createJob: createJobType = {
  title: "",
  remote: false,
  experience: "",
  employmentType: false,
  jobDescription: () => EditorState.createEmpty(),
  company: { name: "", logoUrl: null },
  applicationUrl: "",
  userEmail: "",
};

export default function AddJobPage(props: IAddJobPageProps) {
  const [editor, setEditor] = useState(() => EditorState.createEmpty());
  const [job, setJob] = useState(createJob);
  // const editorState = editor.getCurrentContent();
  // const rawData = JSON.stringify(convertToRaw(editor.getCurrentContent()));
  const html = convertToHTML(editor.getCurrentContent());

  const router = useRouter();
  const homePageUrl = "/";

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(html);

    const newJob = {
      title: job.title,
      remote: job.remote,
      experience: job.experience,
      employmentType: job.employmentType,
      jobDescription: html,
      company: job.company,
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
    // console.log(typeof data);

    router.push({ pathname: homePageUrl, query: { name: html } });
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
          editor={editor}
          setEditor={setEditor}
        />

        <div>{}</div>
      </section>
    </>
  );
}
