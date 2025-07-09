// app/utils/waitlist.ts
import { supabase } from "../../../lib/supabaseClient";

export async function addToWaitlist(email: string) {
  const { data, error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
