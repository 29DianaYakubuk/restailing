-- Create table for full lead form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  budget TEXT NOT NULL,
  start_date TEXT NOT NULL,
  service TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for simple lead form submissions
CREATE TABLE IF NOT EXISTS simple_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_simple_leads_created_at ON simple_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_simple_leads_email ON simple_leads(email);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE simple_leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid errors on re-run)
DROP POLICY IF EXISTS "Allow public insert" ON leads;
DROP POLICY IF EXISTS "Allow public read" ON leads;
DROP POLICY IF EXISTS "Allow public delete" ON leads;
DROP POLICY IF EXISTS "Allow public insert" ON simple_leads;
DROP POLICY IF EXISTS "Allow public read" ON simple_leads;
DROP POLICY IF EXISTS "Allow public delete" ON simple_leads;

-- Create policies for leads table
-- Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read (for now - you can change this later)
CREATE POLICY "Allow public read" ON leads
  FOR SELECT
  USING (true);

-- Allow anyone to delete (for admin panel - you should add authentication later)
CREATE POLICY "Allow public delete" ON leads
  FOR DELETE
  USING (true);

-- Create policies for simple_leads table
CREATE POLICY "Allow public insert" ON simple_leads
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read" ON simple_leads
  FOR SELECT
  USING (true);

CREATE POLICY "Allow public delete" ON simple_leads
  FOR DELETE
  USING (true);
