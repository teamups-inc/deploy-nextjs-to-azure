import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  try {
    const supabase = await createClient();
    // some table that you can query
    const { data, error } = await supabase.from("notes").select("*").limit(1);
    if (error) throw error;
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(err, { status: 500 });
  }
}
