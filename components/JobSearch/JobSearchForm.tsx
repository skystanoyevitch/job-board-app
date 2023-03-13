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
      <form
        action=""
        className="mt-20 container mx-auto md:2/3 lg:w-1/2 form-control"
      >
        <div className="flex flex-col md:flex-row md:justify-center space-y-8 md:space-y-0 md:space-x-10">
          <input
            type="text"
            autoComplete="true"
            autoCapitalize="true"
            className="input input-bordered w-full input-md md:input-lg"
            placeholder="keyword"
            name="title"
            onChange={titleSearchResults}
          />

          <input
            type="text"
            className="input input-bordered w-full input-md md:input-lg"
            placeholder="location"
            onChange={titleSearchResults}
            name="jobLocation"
          />
        </div>
        <div className="my-4">
          {filterTags.map((tagName, index) => {
            return (
              <div
                key={index}
                className="badge badge-outline rounded-none cursor-pointer m-2 hover:bg-cyan-400 hover:text-white"
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
