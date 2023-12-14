import { IJobSearchProps } from "@/types/jobTypes";

export function JobSearchForm({
  titleSearchResults,
  handleClick,
  tagState,
  tagInfo,
  jobs,
  queryTitle,
}: IJobSearchProps) {
  const tags = [
    { id: 0, name: "remote" },
    { id: 1, name: "full time" },
    { id: 2, name: "part time" },
    { id: 3, name: "entry level" },
    { id: 4, name: "senior level" },
    { id: 5, name: "mid level" },
  ];

  // console.log(queryTitle, titleSearchResults);

  return (
    <>
      <form
        action=""
        className="mt-20 container mx-auto md:2/3 lg:w-1/2 form-control"
      >
        <div className="flex flex-col md:flex-row md:justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div>
            <input
              type="text"
              autoComplete="true"
              className="input input-bordered focus:input-success w-full md:input-lg"
              placeholder="keyword"
              name="title"
              onChange={titleSearchResults}
            />
          </div>

          <div className="">
            <input
              type="text"
              className="input input-bordered focus:input-success w-full md:input-lg"
              placeholder="location"
              onChange={titleSearchResults}
              name="jobLocation"
            />
          </div>
        </div>
        <div className="my-4 md:space-x-4 md:text-center">
          {tags.map((tagName) => {
            return (
              <>
                <div
                  key={tagName.id}
                  className={`${
                    tagName.id === tagInfo.id && tagState
                      ? "btn btn-sm btn-active btn-success cursor-pointer lowercase"
                      : "btn btn-xs m-2 md:btn-sm btn-outline cursor-pointer lowercase"
                  }`}
                  onClick={() => handleClick(tagName)}
                >
                  {tagName.name}
                </div>
              </>
            );
          })}
        </div>
      </form>
    </>
  );
}
