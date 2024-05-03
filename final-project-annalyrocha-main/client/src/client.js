import { createClient } from '@supabase/supabase-js';

const URL = 'https://zzobxeawfalmyponlizu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6b2J4ZWF3ZmFsbXlwb25saXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDIxNjEsImV4cCI6MjAyODcxODE2MX0._aQk9ns1z_yA7uJUX2h4pT_uLtuDbBMCCQo9vMPHtAM';

export const supabase =  createClient(URL, API_KEY);;
