import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearchForm({
  queryParams,
  setQueryParams,
  handleChange,
}: IJobSearchProps) {
  // const handleChange = (e: any) => {
  //   setQueryParams(e.target.value);
  //   console.log(queryParams);
  // };
  return (
    <>
      <form action="" className="mt-20 container mx-auto w-1/2 form-control">
        <div className="flex justify-center space-x-10">
          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="keyword"
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="location"
          />
        </div>

        <div className="flex my-4 space-x-4">
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            remote
          </div>
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            full time
          </div>
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            part time
          </div>
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            entry level
          </div>
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            senior
          </div>
          <div className="badge badge-outline rounded-md p-4 cursor-pointer">
            mid level
          </div>
        </div>
      </form>
    </>
  );
}
