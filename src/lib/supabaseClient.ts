import { createClient } from '@supabase/supabase-js';
import { VITE_PUBLIC_SUPABASE_PUBLISHABLE_KEY, VITE_PUBLIC_SUPABASE_URL } from '$env/static/private';

export const supabase = createClient(VITE_PUBLIC_SUPABASE_URL, VITE_PUBLIC_SUPABASE_PUBLISHABLE_KEY)