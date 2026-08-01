import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { AuthIllustration } from '../../components/Auth/AuthIllustration';
import { AuthFormCard } from '../../components/Auth/AuthFormCard';

export function AuthPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '', confirmPassword: '', role: 'student' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!form.email.trim() || !form.password.trim()) {
      setError('Please fill in your email and password.');
      return;
    }

    if (mode === 'signup') {
      if (!form.name.trim() || !form.mobile.trim()) {
        setError('Please complete your name and mobile number.');
        return;
      }

      if (form.password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));

    login({
      name: form.name || form.email.split('@')[0],
      email: form.email,
      role: form.role,
    });

    setSuccess(mode === 'login' ? 'Welcome back! Redirecting to your dashboard.' : 'Account created successfully! Redirecting to your dashboard.');
    setLoading(false);
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    setError('');
    setSuccess(`${provider} sign-in is ready for integration.`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(129,140,248,0.16),_transparent_28%),linear-gradient(135deg,_#020617,_#0f172a)] p-3 sm:p-4 lg:p-6">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ x: [0, 120, 0], y: [0, -80, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[-8%] top-[-8%] h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <motion.div animate={{ x: [0, -90, 0], y: [0, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[-10%] right-[-6%] h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative z-10 w-full max-w-[1600px] overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70 shadow-[0_30px_90px_-36px_rgba(2,6,23,0.9)] backdrop-blur-xl">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="bg-slate-950/40 p-3 sm:p-4 lg:p-5">
            <AuthIllustration />
          </div>

          <div className="flex items-center justify-center bg-slate-900/70 p-4 sm:p-6 lg:p-8">
            <AuthFormCard
              mode={mode}
              form={form}
              setForm={setForm}
              error={error || success}
              loading={loading}
              onToggleMode={setMode}
              onSubmit={handleSubmit}
              onSocialLogin={handleSocialLogin}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
