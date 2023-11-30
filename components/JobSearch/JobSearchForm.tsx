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
            className="input input-bordered focus:input-success w-full md:input-lg"
            placeholder="keyword"
            name="title"
            onChange={titleSearchResults}
          />

          <input
            type="text"
            className="input input-bordered focus:input-success w-full md:input-lg"
            placeholder="location"
            onChange={titleSearchResults}
            name="jobLocation"
          />
        </div>
        <div className="my-4 space-x-4 text-center">
          {tags.map((tagName) => {
            return (
              <div
                key={tagName.id}
                className={`${
                  tagName.id === tagState.id &&
                  tagState.active === "active" &&
                  "bg-primary text-white border-primary"
                } badge badge-sm badge-outline rounded-full text-sm py-4 cursor-pointer hover:badge`}
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
