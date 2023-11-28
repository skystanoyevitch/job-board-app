/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, useEffect, useState } from "react";
import { EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createJobType } from "@/types/mongodb.connect";
import dynamic from "next/dynamic";
// import Image from "next/image";
// import Image from "next/image";
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

export function AddJobForm({
  handleSubmit,
  job,
  setJob,
  editor,
  setEditor,
  errorMessage,
}: IAddJobFormProps) {
  console.log(job);

  const [toggle, setToggle] = useState(false);
  // const [buttonValue, setButtonValue] = useState("")
  //TODO: fix state for buttons

  const clickToggler = (e: any) => {
    const tagValue = e.target.value;
    setToggle(!toggle);
    //TODO: add toggle state for buttons
    // setButtonValue(e.target.value)
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
            className={`input input-bordered w-full input-lg ${
              job.title != "" ? " input-success" : "input-primary"
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
            className={`input input-bordered input-primary w-full input-lg ${
              !job.jobLocation.includes("") ? "input-success" : "input-primary"
            }`}
            onChange={(e) =>
              setJob({
                ...job,
                jobLocation: [e.target.value],
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
              className={`checkbox checkbox-primary ${
                job.remote ? "checkbox-success" : "checkbox-primary"
              }`}
              onChange={() => setJob({ ...job, remote: !job.remote })}
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
                className="badge md:badge-lg text-md py-3 md:py-4 badge-outline hover:badge-primary hover:badge-outline"
                onClick={() => setJob({ ...job, experience: "entry level" })}
              >
                entry level
              </div>
              <div
                className="badge md:badge-lg text-md py-3 md:py-4 badge-outline hover:badge-primary hover:badge-outline"
                onClick={() => setJob({ ...job, experience: "mid level" })}
              >
                mid level
              </div>
              <div
                className="badge md:badge-lg text-md py-3 md:py-4 badge-outline hover:badge-primary hover:badge-outline"
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
              {/* <button
                value="part time"
                name="partTime"
                className={`${
                  getTagName != "" ? "badge-outline" : "badge badge-primary"
                } badge md:badge-lg text-md py-3 md:py-4`}
                onClick={clickToggler}
              >
                part time
              </button> */}

              {/* <ul className="cursor-pointer flex space-x-4">
                {buttons.map((button) => (
                  <>
                    <li>
                      <button
                        value={button.value}
                        name={button.name}
                        onClick={clickToggler}
                        className={`${
                          toggle && "badge badge-primary"
                        } badge badge-outline md:badge-lg text-md py-3 md:py-4`}
                      >
                        {button.text}
                      </button>
                    </li>
                  </>
                ))}
              </ul> */}

              {/* <button
                value="full time"
                className={`${
                  toggle && "badge-outline"
                }  badge badge-primary md:badge-lg text-md py-3 md:py-4`}
                onClick={clickToggler}
              >
                full time
              </button>
              <button
                value="contract"
                className={`${
                  toggle ? "badge" : "badge-outline"
                } badge md:badge-lg text-md py-3 md:py-4`}
                onClick={clickToggler}
              >
                contract
              </button> */}
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
