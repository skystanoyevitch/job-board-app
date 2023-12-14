/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, useEffect, useState } from "react";
import { EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createJobType } from "@/types/mongodb.connect";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

//types
export interface IAddJobFormProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  job: createJobType;
  setJob: React.Dispatch<React.SetStateAction<createJobType>>;
  editor: EditorState;
  setEditor: React.Dispatch<React.SetStateAction<EditorState>>;
  errorMessage: string;
}

type ButtonsType = Array<{
  id: string;
  value: string;
  text: string;
}>;

export function AddJobForm({
  handleSubmit,
  job,
  setJob,
  editor,
  setEditor,
  errorMessage,
}: IAddJobFormProps) {
  const [tag, setTag] = useState("");
  const [buttonValue, setButtonValue] = useState<ButtonsType>([
    { id: "0", value: "part time", text: "Part Time" },
    { id: "1", value: "full time", text: "Full Time" },
    { id: "2", value: "contract", text: "Contract" },
  ]);
  //TODO: fix state for buttons

  const clickToggler = (e: any | string) => {
    const tagValue = e.target.value;
    setTag(tagValue);
    console.log(tagValue);
    setJob({ ...job, employmentType: tagValue });
  };

  return (
    <>
      <form
        action="POST"
        className="container mx-auto w-5/6 md:w-3/4 lg:w-1/2 flex flex-col space-y-10"
        onSubmit={handleSubmit}
      >
        <div className="justify-center">
          <label className="label">
            <span className="label-text md:text-xl font-bold">
              Title (<span className="text-red-600">*</span>)
            </span>
          </label>
          <input
            type="text"
            className={`input input-bordered w-full md:input-lg ${
              job.title != "" ? " input-success" : "input"
            }`}
            onChange={(e) => setJob({ ...job, title: e.target.value })}
            value={job.title}
          />
          <div className="text-red-500">{job.title === "" && errorMessage}</div>
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text md:text-xl font-bold">Location</span>
          </label>
          <input
            type="text"
            className={`input input-bordered w-full md:input-lg ${
              !job.jobLocation.includes("") ? "input-success" : "input"
            }`}
            onChange={(e) =>
              setJob({
                ...job,
                jobLocation: e.target.value,
              })
            }
            value={job.jobLocation}
          />
        </div>
        <div className="">
          <label className="cursor-pointer flex space-x-4">
            <span className="label-text">Remote</span>
            <input
              type="checkbox"
              className={`checkbox ${
                job.remote ? "checkbox-success" : "checkbox"
              }`}
              onChange={() => setJob({ ...job, remote: "remote" })}
            />
          </label>
        </div>
        <div className="">
          <h2 className="md:text-xl font-bold">
            Experience (<span className="text-red-600">*</span>)
          </h2>
          <div className="mt-6 flex">
            <div className="cursor-pointer flex space-x-4">
              <div
                className="btn btn-xs md:btn-sm btn-outline lowercase"
                onClick={() => setJob({ ...job, experience: "entry level" })}
              >
                entry level
              </div>
              <div
                className="btn btn-xs md:btn-sm btn-outline lowercase"
                onClick={() => setJob({ ...job, experience: "mid level" })}
              >
                mid level
              </div>
              <div
                className="btn btn-xs md:btn-sm btn-outline lowercase"
                onClick={() => setJob({ ...job, experience: "senior level" })}
              >
                senior level
              </div>
            </div>
          </div>
          <div className="text-red-500">{!job.experience && errorMessage}</div>
        </div>
        <div className="">
          <h2 className="md:text-xl font-bold">
            Employment type (<span className="text-red-600">*</span>)
          </h2>
          <div className="mt-6">
            <div className="">
              <ul className="cursor-pointer flex space-x-4">
                {buttonValue.map((b) => (
                  <>
                    <li>
                      <button
                        value={b.value}
                        id={b.id}
                        onClick={clickToggler}
                        className={`${
                          tag === b.value && "btn btn-success"
                        } btn btn-xs md:btn-sm btn-outline lowercase`}
                      >
                        {b.text}
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-red-500">
            {!job.employmentType && errorMessage}
          </div>
        </div>
        <div className="">
          <h2 className="md:text-xl font-bold">
            Job Description (<span className="text-red-600">*</span>)
          </h2>
          <Editor
            editorState={editor}
            onEditorStateChange={setEditor}
            wrapperClassName="h-96 border border-opacity-20 mt-6"
          />
          <div className="text-red-500">
            {!editor.getCurrentContent().hasText() && errorMessage}
          </div>
        </div>
        <div className="collapse border collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title">
            <h2 className="md:text-xl font-bold">
              Company (<span className="text-red-600">*</span>)
            </h2>
            <p className="font-lite text-gray-500">
              name and details of the hiring company
            </p>
          </div>
          <div className="collapse-content space-y-8">
            <input
              type="text"
              placeholder="Company name"
              className="input input-bordered w-full"
              onChange={(e) =>
                setJob({
                  ...job,
                  company: { ...job.company, name: e.target.value },
                })
              }
              value={job.company.name}
            />
            <div className="text-red-500">
              {!job.company.name && errorMessage}
            </div>

            {/* <div>
              <label className="label">
                <span className="label-text">Add Company Logo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={handleChange}
              />
              {job.company.logoUrl !== "" && (
                <div className="m-6 h-12 w-12 rounded-full">
                  <img src={job.company.logoUrl} alt="my logo" />
                </div>
              )}
            </div> */}
          </div>
          <div className="collapse border collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title">
              <h2 className="md:text-xl font-bold">
                How to Apply (<span className="text-red-600">*</span>)
              </h2>
              <p className="font-lite text-gray-500">application URL</p>
            </div>
            <div className="collapse-content">
              <label className="label">
                <span className="label-text font-bold">URL</span>
              </label>
              <input
                type="text"
                placeholder="type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setJob({ ...job, applicationUrl: e.target.value })
                }
                value={job.applicationUrl}
              />
              <div className="text-red-600">
                {!job.applicationUrl && errorMessage}
              </div>
            </div>
          </div>
          <div className="collapse border collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title">
              <h2 className="md:text-xl font-bold">Account information</h2>
              <p className="font-lite text-gray-500">
                provide your email address for account creation, your email and
                details of account will not show up in the job post.
              </p>
            </div>
            <div className="collapse-content">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder=""
                className="input input-bordered w-full"
                onChange={(e) => setJob({ ...job, userEmail: e.target.value })}
                value={job.userEmail}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}
