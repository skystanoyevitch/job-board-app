import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearchForm({ titleSearchResults }: IJobSearchProps) {
  return (
    <>
      <form action="" className="mt-20 container mx-auto w-1/2 form-control">
        <div className="flex justify-center space-x-10">
          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="keyword"
            name="title"
            onChange={titleSearchResults}
          />

          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="location"
            onChange={titleSearchResults}
            name="jobLocation"
          />
        </div>
        <div className="flex my-4 space-x-4 justify-center">
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            remote
          </div>
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            full time
          </div>
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            part time
          </div>
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            entry level
          </div>
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            senior
          </div>
          <div className="badge badge-outline rounded-none p-4 cursor-pointer">
            mid level
          </div>
        </div>
      </form>
    </>
  );
}
