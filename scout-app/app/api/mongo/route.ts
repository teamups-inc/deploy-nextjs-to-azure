import client from "@/lib/mongo/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  try {
    const mongoClient = await client.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
