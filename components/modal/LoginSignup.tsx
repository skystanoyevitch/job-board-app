type Props = {};

export function LoginSignup({ open, close }: any | boolean) {
  console.log(open);
  if (!open) return null;
  return (
    <>
      <div className="flex flex-col justify-center shadow-lg top-1/2 left-1/2 fixed -translate-y-1/2 -translate-x-1/2 z-10 bg-white w-full md:max-w-3xl pb-8 md:p-10">
        <div className="flex justify-end">
          <button
            type="button"
            className="btn btn-xs md:btn-sm btn-circle btn-outline m-2"
            onClick={close}
          >
            x
          </button>
        </div>

        <form className="flex flex-col items-center space-y-4 md:space-y-8">
          <div className="label text-xl md:text-3xl font-black bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-red-600 to-orange-400">
            Create an Account
          </div>
          <input
            className="input input-bordered focus:input-success md:w-1/2 input-sm md:input-lg"
            placeholder="name"
          ></input>
          <input
            className="input input-bordered focus:input-success md:w-1/2 input-sm md:input-lg"
            placeholder="password"
          ></input>
          <p className="text-xs md:text-sm">Already have an account? Sign in</p>
        </form>
      </div>
    </>
  );
}
