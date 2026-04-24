import { createClient } from '@supabase/supabase-js'

// These values are replaced by the user with their own Supabase project credentials
// See README.md for setup instructions
const supabaseUrl = import.meta.env.https://inlwjejnxumrpnymhydd.supabase.co/rest/v1/ || ''
const supabaseAnonKey = import.meta.env.sb_publishable_B5gJypA30Z1yA6DLKMS59g_iYnIcNDy || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️ Supabase credentials not configured. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file. ' +
    'See README.md for setup instructions.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

export default supabase
