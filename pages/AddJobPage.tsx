import { AddJobForm } from "@/components/addJob/AddJobForm";
import { useState } from "react";
// TODO: call import function from the API
import { addJob } from "./api/jobs";
// import clientPromise from "@/database/mongodb.connect";
export interface IAddJobPageProps {}

export default function AddJobPage(props: IAddJobPageProps) {
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");

  console.log(title);

  const handleClick = async () => {
    console.log("button clicked!");

    // TODO: get data from import

    const newJob = {
      title: title,
      remote: true,
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
          handleClick={handleClick}
          title={title}
          setTitle={setTitle}
        />
      </section>
    </>
  );
}
