import { useState } from 'react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import RadioGroup from '@/components/ui/radio-group';

export default function CheckoutPage() {
  const router = useRouter();
  const { id } = router.query;

  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log('Payment completed');
      // Redirect to a thank you page or back to the course
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Checkout - SciAstra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        {step === 1 ? (
          <>
            <div>
              <Label>Select Payment Method</Label>
              <RadioGroup
                options={[
                  { value: 'credit', label: 'Credit Card' },
                  { value: 'debit', label: 'Debit Card' },
                  { value: 'upi', label: 'UPI' },
                ]}
                value={paymentMethod}
                onChange={setPaymentMethod}
              />
            </div>
            <Button type="submit">Proceed to Verification</Button>
          </>
        ) : (
          <>
            <div>
              <Label htmlFor="verificationCode">Enter Verification Code</Label>
              <Input
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Complete Payment</Button>
          </>
        )}
      </form>
    </div>
  );
}