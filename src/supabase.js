import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdwyarevedyihlstmwbg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkd3lhcmV2ZWR5aWhsc3Rtd2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2MTEzMzgsImV4cCI6MjAwMDE4NzMzOH0.9VuB5XowpLDPoIJGExV1rp4k7QOSFmpxwzewb9zMPzM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
