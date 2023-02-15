import React, { Dispatch, useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createJobType } from "@/types/mongodb.connect";
import Image from "next/image";

//types
export interface IAddJobFormProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  job: createJobType;
  setJob: React.Dispatch<React.SetStateAction<createJobType>>;
  editor: EditorState;
  setEditor: React.Dispatch<React.SetStateAction<EditorState>>;
}

export function AddJobForm({
  handleSubmit,
  job,
  setJob,
  editor,
  setEditor,
}: IAddJobFormProps) {
  console.log(job.company.logoUrl);
  return (
    <>
      <form
        action="POST"
        className="container mx-auto w-1/2 flex flex-col space-y-10"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="title"
            onChange={(e) => setJob({ ...job, title: e.target.value })}
            value={job.title}
          />
        </div>
        <div className="">
          <label className="cursor-pointer flex space-x-4">
            <span className="label-text">Remote</span>
            <input
              type="checkbox"
              className="checkbox checkbox-success"
              onChange={() => setJob({ ...job, remote: !job.remote })}
            />
          </label>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Experience</h2>
          <div className="mt-6 flex">
            <div className="cursor-pointer flex space-x-4">
              <div
                className="badge badge-lg badge-accent badge-outline"
                onClick={() => setJob({ ...job, experience: "entry level" })}
              >
                entry level
              </div>
              <div
                className="badge badge-lg badge-secondary badge-outline"
                onClick={() => setJob({ ...job, experience: "mid level" })}
              >
                mid level
              </div>
              <div
                className="badge badge-lg badge-accent badge-outline"
                onClick={() => setJob({ ...job, experience: "senior level" })}
              >
                senior level
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Employment type</h2>
          <div className="mt-6">
            <div className="cursor-pointer flex space-x-4">
              <div
                className="badge badge-lg badge-outline"
                onClick={() => setJob({ ...job, experience: "part time" })}
              >
                part time
              </div>
              <div
                className="badge badge-lg badge-outline"
                onClick={() => setJob({ ...job, experience: "full time" })}
              >
                full time
              </div>
              <div
                className="badge badge-lg badge-outline"
                onClick={() => setJob({ ...job, experience: "contract" })}
              >
                contract
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Job Description</h2>
          <Editor
            editorState={editor}
            onEditorStateChange={setEditor}
            toolbarClassName=""
            wrapperClassName="h-96 rounded-md border border-opacity-20"
            editorClassName=""
          />
        </div>
        <div className="collapse border collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title">
            <h2 className="text-xl font-bold">Company</h2>
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
            <div>
              <label className="label">
                <span className="label-text">Add Company Logo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={(e) => {
                  if (!e.target.files) return;
                  setJob({
                    ...job,
                    company: {
                      ...job.company,
                      logoUrl: URL.createObjectURL(e.target.files[0]),
                    },
                  });
                }}
              />
              {/* {job.company.logoUrl && (
                <div>
                  <Image
                    src={`/${job.company.logoUrl.name}`}
                    alt="preview"
                    height={60}
                    width={60}
                  />
                  <img src={job.company.logoUrl} alt="default" />
                </div>
              )} */}
            </div>
          </div>
          <div className="collapse border collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title">
              <h2 className="text-xl font-bold">How to Apply</h2>
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
            </div>
          </div>
          <div className="collapse border collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title">
              <h2 className="text-xl font-bold">Account information</h2>
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
        {/* <Image
          src={job.company.logoUrl}
          alt="default"
          height={130}
          width={130}
        /> */}
      </form>
    </>
  );
}
