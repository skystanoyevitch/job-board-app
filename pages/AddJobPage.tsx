import * as React from "react";

// export interface IAppProps {}

export default function AddJobsComponent() {
  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-center text-5xl font-black p-20">
          Add a Job for free
        </h1>
        <form action="POST" className="container mx-auto w-1/2">
          <div className="flex justify-center">
            <input
              type="text"
              className="input input-bordered w-full input-lg"
              placeholder="title"
            />
          </div>
          <div className="mt-10">
            <label className="cursor-pointer flex space-x-4">
              <span className="label-text">Remote</span>
              <input type="checkbox" className="checkbox checkbox-success" />
            </label>
          </div>
        </form>
      </section>
    </>
  );
}
