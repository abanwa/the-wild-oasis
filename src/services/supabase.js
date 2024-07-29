import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ffqipukcnukjhcbecqbq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcWlwdWtjbnVramhjYmVjcWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDM5NDQsImV4cCI6MjAzNjk3OTk0NH0.-yiaZxOzFFnAEpxklkW0lSx8y9D3NQRvxPmXKE2nO5I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
