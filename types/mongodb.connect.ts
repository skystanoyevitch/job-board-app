import { MongoClient } from "mongodb";

// global type variable for persisting values in database
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

//exported job types
export type createJobType = {
  title: string;
  remote: string;
  experience: string;
  employmentType: string;
  jobDescription: any; // TODO: possible type change in the future
  jobLocation: string;
  company: {
    name: string;
    logoUrl: any;
  };
  applicationUrl: string;
  userEmail: string;
};
