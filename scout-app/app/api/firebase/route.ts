import { db } from "@/lib/firebase/firestore";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  try {
    const q = query(collection(db, "test-collection"), limit(1));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];
    return NextResponse.json({ doc: doc.data() }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
