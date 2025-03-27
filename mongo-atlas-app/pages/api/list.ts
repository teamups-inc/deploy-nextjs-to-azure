import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/mongodb";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const db = client.db("sample_restaurants");
    const collection = db.collection("restaurants");
    const results = await collection
      .find({})
      .project({
        grades: 0,
      })
      .limit(10)
      .toArray();
    response.status(200).json(results);
  } catch (err) {
    console.error(err);
    response.status(500);
  }
}
