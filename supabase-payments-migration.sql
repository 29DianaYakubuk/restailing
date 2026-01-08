-- ==========================================
-- Stripe Payments Table for Restailing
-- ==========================================
--
-- Инструкция:
-- 1. Откройте Supabase Dashboard → SQL Editor
-- 2. Скопируйте весь этот файл
-- 3. Вставьте в SQL Editor
-- 4. Нажмите Run (Ctrl/Cmd + Enter)
-- ==========================================

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT UNIQUE NOT NULL,
    payment_intent_id TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'usd',
    payment_method_type TEXT,
    receipt_url TEXT,
    customer_email TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_payments_session_id ON payments(session_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments(created_at DESC);

-- Add comments
COMMENT ON TABLE payments IS 'Stripe payment transactions for restailing';
COMMENT ON COLUMN payments.session_id IS 'Stripe checkout session ID';
COMMENT ON COLUMN payments.payment_intent_id IS 'Stripe payment intent ID';
COMMENT ON COLUMN payments.status IS 'Payment status: pending, succeeded, failed';
COMMENT ON COLUMN payments.amount IS 'Payment amount in dollars';
COMMENT ON COLUMN payments.metadata IS 'Additional metadata as JSON';

-- Enable Row Level Security (RLS)
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can manage payments"
ON payments
FOR ALL
USING (true)
WITH CHECK (true);

-- Policy: Authenticated users can view their own payments (optional, if you track user_id)
-- Uncomment and modify if you add user_id column:
-- CREATE POLICY "Users can view own payments"
-- ON payments
-- FOR SELECT
-- USING (auth.uid()::text = user_id);

-- Verify table was created
SELECT
    'Table created successfully!' as message,
    COUNT(*) as row_count
FROM payments;

-- Show table structure
SELECT
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'payments'
ORDER BY ordinal_position;
