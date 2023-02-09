import { MongoClient } from 'mongodb'

// global type variable for persisting values in database
declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

//exported job types
export type createJobType = {
  title: string;
  remote: boolean;
  experience: boolean;
  employmentType: boolean;
  companyName: string;
  applicationUrl: string;
  userEmail: string;
};

