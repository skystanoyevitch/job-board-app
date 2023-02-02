export interface IJobSearchFormProps {}

export function JobSearchForm(props: IJobSearchFormProps) {
  return (
    <>
      <form
        action="POST"
        className="mt-20 container mx-auto w-1/2 form-control"
      >
        <div className="flex justify-center space-x-10">
          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="keyword"
          />

          <input
            type="text"
            className="input input-bordered w-full input-lg"
            placeholder="location"
          />
        </div>

        <div className="flex">
          <label htmlFor="remote" className=" label cursor-pointer">
            <span className="label-text p-2">Remote</span>
            <input
              type="checkbox"
              name="remote"
              className="toggle toggle-success"
            />
          </label>
        </div>
      </form>
    </>
  );
}
