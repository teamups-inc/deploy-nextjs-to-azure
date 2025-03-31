import { IConnection } from "@/types/IConnection";
import { firebaseConnection } from "./firebase/connection";
import { mongoConnection } from "./mongo/connection";
import { supabaseConnection } from "./supabase/connection";

// Export all connections as an array
export const connections: IConnection[] = [
  mongoConnection,
  supabaseConnection,
  firebaseConnection,
];
