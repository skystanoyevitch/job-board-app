import { createJobType } from "@/pages/AddJobPage";
import React, { Dispatch, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//types
export interface IAddJobFormProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  job: createJobType;
  setJob: React.Dispatch<React.SetStateAction<createJobType>>;
}

export function AddJobForm({ handleSubmit, job, setJob }: IAddJobFormProps) {
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
          {/* <button type="button" className="btn" onClick={handleClick}>
            Set Title
          </button> */}
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
          <div className="mt-6">
            <label className="cursor-pointer flex space-x-4">
              <span className="label-text">Entry Level</span>
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                onChange={() => setJob({ ...job, experience: !job.experience })}
              />
            </label>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Employment type</h2>
          <div className="mt-6">
            <label className="cursor-pointer flex space-x-4">
              <span className="label-text">Part Time</span>
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                onChange={() =>
                  setJob({ ...job, employmentType: !job.employmentType })
                }
              />
            </label>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Job Description</h2>
          <Editor
            // editorState={""}
            // onEditorStateChange={""}
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
              name of the hiring company
            </p>
          </div>
          <div className="collapse-content">
            <input
              type="text"
              placeholder="Company name"
              className="input input-bordered w-full"
              onChange={(e) => setJob({ ...job, companyName: e.target.value })}
              value={job.companyName}
            />
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
      </form>
    </>
  );
}
