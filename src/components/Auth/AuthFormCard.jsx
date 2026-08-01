import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, LoaderCircle, Mail, Lock, User, Phone, ShieldCheck, Globe2 } from 'lucide-react';

export function AuthFormCard({ mode, form, setForm, error, loading, onToggleMode, onSubmit, onSocialLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const passwordStrength = form.password?.length >= 8 ? 'Strong' : form.password?.length >= 6 ? 'Medium' : 'Weak';

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="relative w-full max-w-[470px] rounded-[24px] border border-white/10 bg-slate-900/90 p-6 shadow-[0_24px_70px_-28px_rgba(2,6,23,0.7)] sm:p-8">
      <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_35%)]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">GrindUp</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{mode === 'login' ? 'Welcome Back' : 'Create Your Account'}</h2>
            <p className="mt-2 text-sm text-slate-400">{mode === 'login' ? 'Continue your hiring journey.' : 'Start hiring smarter and faster.'}</p>
          </div>
          <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 flex rounded-2xl border border-white/10 bg-slate-800/70 p-1">
          <button type="button" onClick={() => onToggleMode('login')} className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition ${mode === 'login' ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm' : 'text-slate-400'}`}>Login</button>
          <button type="button" onClick={() => onToggleMode('signup')} className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition ${mode === 'signup' ? 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm' : 'text-slate-400'}`}>Sign Up</button>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {mode === 'signup' && (
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block font-medium text-slate-200">Full Name</span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 transition focus-within:border-sky-400 focus-within:bg-slate-800">
                <User className="h-4 w-4 text-slate-400" />
                <input value={form.name} onChange={(event) => handleChange('name', event.target.value)} className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-500" placeholder="Alex Morgan" />
              </div>
            </label>
          )}

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block font-medium text-slate-200">Email</span>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 transition focus-within:border-sky-400 focus-within:bg-slate-800">
              <Mail className="h-4 w-4 text-slate-400" />
              <input type="email" value={form.email} onChange={(event) => handleChange('email', event.target.value)} className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-500" placeholder="you@company.com" />
            </div>
          </label>

          {mode === 'signup' && (
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block font-medium text-slate-200">Mobile Number</span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 transition focus-within:border-sky-400 focus-within:bg-slate-800">
                <Phone className="h-4 w-4 text-slate-400" />
                <input type="tel" value={form.mobile} onChange={(event) => handleChange('mobile', event.target.value)} className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-500" placeholder="+91 9876543210" />
              </div>
            </label>
          )}

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block font-medium text-slate-200">Password</span>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 transition focus-within:border-sky-400 focus-within:bg-slate-800">
              <Lock className="h-4 w-4 text-slate-400" />
              <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(event) => handleChange('password', event.target.value)} className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-500" placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword((value) => !value)} className="text-slate-400 transition hover:text-slate-600">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {mode === 'signup' && <p className="mt-2 text-xs text-slate-500">Password strength: <span className={`font-semibold ${passwordStrength === 'Strong' ? 'text-emerald-600' : passwordStrength === 'Medium' ? 'text-amber-600' : 'text-rose-500'}`}>{passwordStrength}</span></p>}
          </label>

          {mode === 'signup' && (
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block font-medium text-slate-200">Confirm Password</span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 transition focus-within:border-sky-400 focus-within:bg-slate-800">
                <Lock className="h-4 w-4 text-slate-400" />
                <input type={showConfirmPassword ? 'text' : 'password'} value={form.confirmPassword} onChange={(event) => handleChange('confirmPassword', event.target.value)} className="w-full border-none bg-transparent text-white outline-none placeholder:text-slate-500" placeholder="••••••••" />
                <button type="button" onClick={() => setShowConfirmPassword((value) => !value)} className="text-slate-400 transition hover:text-slate-600">
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </label>
          )}

          {mode === 'signup' && (
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block font-medium text-slate-200">Select Role</span>
              <select value={form.role} onChange={(event) => handleChange('role', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 text-white outline-none transition focus:border-sky-400 focus:bg-slate-800">
                <option value="student">Student</option>
                <option value="college">College</option>
                <option value="company">Company</option>
              </select>
            </label>
          )}

          <div className="flex items-center justify-between text-sm">
            {mode === 'login' ? (
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-sky-500 focus:ring-sky-400" />
                <span>Remember me</span>
              </label>
            ) : (
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-sky-500 focus:ring-sky-400" />
                <span>Accept Terms</span>
              </label>
            )}
            {mode === 'login' && <button type="button" className="font-medium text-sky-400">Forgot Password?</button>}
          </div>

          {error && <p className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">{error}</p>}

          <button type="submit" className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-xl" disabled={loading}>
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : mode === 'login' ? 'Login' : 'Create Account'}
          </button>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <div className="h-px flex-1 bg-white/10" />
            <span>Or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => onSocialLogin('Google')} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300">
              <Mail className="h-4 w-4" /> Google
            </button>
            <button type="button" onClick={() => onSocialLogin('LinkedIn')} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300">
              <Globe2 className="h-4 w-4" /> LinkedIn
            </button>
          </div>

          <div className="text-center text-sm text-slate-500">
            {mode === 'login' ? (
              <>
                Don’t have an account?{' '}
                <button type="button" onClick={() => onToggleMode('signup')} className="font-semibold text-sky-400">Create Account</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => onToggleMode('login')} className="font-semibold text-sky-400">Login</button>
              </>
            )}
          </div>

          <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-3 py-3 text-center text-xs font-medium text-sky-300">
            Trusted by 500+ Companies
          </div>
        </form>
      </div>
    </motion.div>
  );
}
