
// 1. Import the Supabase library
import { createClient } from '@supabase/supabase-js';

// 2. Replace with your actual Supabase project URL and anon key
const supabaseUrl = 'https://tzbwfqhxaaffxxfbgnkv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6YndmcWh4YWFmZnh4ZmJnbmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzM3OTMsImV4cCI6MjA1OTYwOTc5M30.ardg6IzYQ4494Z_Gt1xwwz9TYppENPgr_ZN9lcqz2xw';

// 3. Initialize the Supabase client with your credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const session = await supabase.auth.getSession();
console.log(session);
