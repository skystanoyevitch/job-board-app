import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearchForm({
  titleSearchResults,
  handleClick,
}: IJobSearchProps) {
  const filterTags = [
    "remote",
    "full time",
    "part time",
    "entry level",
    "senior level",
    "mid level",
  ];
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
          {filterTags.map((tagName, index) => {
            return (
              <div
                key={index}
                className="badge badge-outline rounded-none p-4 cursor-pointer hover:bg-cyan-400 hover:text-white"
                onClick={() => handleClick(tagName)}
              >
                {tagName}
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}
