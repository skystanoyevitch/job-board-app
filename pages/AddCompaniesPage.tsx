// import clientPromise from "@/database/mongodb.connect";

// export interface IAppProps {}

export default function AddCompaniesComponent() {
  return (
    <div>
      <h1 className="text-3xl text-green-600">Add your Company here!</h1>
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("job-board-database");
//     const jobs = await db.collection("jobs").find({}).toArray();

//     return {
//       props: { jobs: JSON.parse(JSON.stringify(jobs)) },
//     };
//   } catch (e) {
//     console.error(e);
//   }
// }
