import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearchForm({
  titleSearchResults,
  handleClick,
  tagState,
}: IJobSearchProps) {
  // const filterTags = [
  //   "remote",
  //   "full time",
  //   "part time",
  //   "entry level",
  //   "senior level",
  //   "mid level",
  // ];

  const tags = [
    { id: 0, name: "remote", active: "" },
    { id: 1, name: "full time", active: "" },
    { id: 2, name: "part time", active: "" },
    { id: 3, name: "entry level", active: "" },
    { id: 4, name: "senior level", active: "" },
    { id: 5, name: "mid level", active: "" },
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
          {tags.map((tagName, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === tagState.id && "bg-cyan-400 text-white"
                } badge badge-lg badge-outline rounded-md text-md py-4 cursor-pointer m-2 hover:bg-cyan-400 hover:text-white hover:border-cyan-400`}
                onClick={() => handleClick(tagName)}
              >
                {tagName.name}
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}
