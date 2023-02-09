import React, { Dispatch, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//types
export interface IAddJobFormProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  title: string;
  setTitle: Dispatch<React.SetStateAction<string>>;
  setRemote: Dispatch<React.SetStateAction<boolean>>;
  setExperience: Dispatch<React.SetStateAction<boolean>>;
  setEmploymentType: Dispatch<React.SetStateAction<boolean>>;
  remote: boolean;
  experience: boolean;
  employmentType: boolean;
}

export function AddJobForm({
  handleSubmit,
  title,
  setTitle,
  setRemote,
  setExperience,
  setEmploymentType,
  remote,
  experience,
  employmentType,
}: IAddJobFormProps) {
  // const [title, setTitle] = useState("");
  // const [editor, setEditor] = useState("");
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
              onChange={() => setRemote(!remote)}
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
                onChange={() => setExperience(!experience)}
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
                onChange={() => setEmploymentType(!employmentType)}
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
