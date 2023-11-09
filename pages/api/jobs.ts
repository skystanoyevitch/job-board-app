import clientPromise from "@/database/mongodb.connect";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { createJobType } from "@/types/mongodb.connect";

const database = "job-board-database";

export const getJobs = async () => {
  const client = await clientPromise;
  const db = client.db(database);
  const jobsCollection = await db.collection("jobs").find().toArray();

  return JSON.parse(JSON.stringify(jobsCollection));
};

export const addJob = async (newJob: any): Promise<ObjectId> => {
  const client = await clientPromise;
  const db = client.db(database);
  const response = await db.collection("jobs").insertOne(newJob);

  // console.log(response)

  return response.insertedId;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const jobsData = await getJobs();
      res.status(201).json(jobsData);
    } catch (error) {
      res.status(405).json(JSON.parse(JSON.stringify(error)));
    }
  } else if (req.method === "POST") {
    try {
      const newJob: createJobType = {
        title: req.body.title,
        remote: req.body.remote,
        experience: req.body.experience,
        employmentType: req.body.employmentType,
        jobDescription: req.body.jobDescription,
        jobLocation: req.body.jobLocation,
        company: req.body.company,
        applicationUrl: req.body.applicationUrl,
        userEmail: req.body.userEmail,
      };
      const insertedId = await addJob(newJob);
      // res.revalidate('/jobs')
      res.status(200).json(insertedId);
    } catch (error) {
      res.status(405).json(JSON.parse(JSON.stringify(error)));
    }
  }
};
