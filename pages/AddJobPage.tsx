import { AddJobForm } from "@/components/addJob/AddJobForm";
import React, { useState } from "react";
// TODO: call import function from the API
import { addJob } from "./api/jobs";
export interface IAddJobPageProps {}

export default function AddJobPage(props: IAddJobPageProps) {
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");
  const [remote, setRemote] = useState(false);
  const [experience, setExperience] = useState(false);
  const [employmentType, setEmploymentType] = useState(false);

  console.log(title);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("button clicked!");

    const newJob = {
      title: title,
      remote: remote,
      experience: experience,
      employmentType: employmentType,
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
          title={title}
          setTitle={setTitle}
          setRemote={setRemote}
          setExperience={setExperience}
          setEmploymentType={setEmploymentType}
          remote={remote}
          experience={experience}
          employmentType={employmentType}
        />
      </section>
    </>
  );
}
