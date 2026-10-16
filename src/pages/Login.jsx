import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Giriş başarısız oldu!');
      }

      localStorage.setItem('token', data.token);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans antialiased min-h-screen flex flex-col relative selection:bg-[#8083ff] selection:text-[#0d0096]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_-15%,rgba(192,193,255,0.12),transparent_65%)]"></div>
      
      <main className="flex-1 flex flex-col relative w-full z-10 px-4 py-8 items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center py-4 relative overflow-hidden">
          
          <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-72 rounded-full bg-gradient-to-tr from-[#571bc1] via-[#8083ff]/30 to-[#8582ff]/40 blur-3xl opacity-60"></div>
          <div className="pointer-events-none absolute top-40 right-[-10%] w-48 h-48 rounded-full bg-[#8083ff]/20 blur-2xl opacity-40"></div>

          {/* Brand Presentation */}
          <div className="flex flex-col items-center text-center mb-6 relative z-10 w-full max-w-sm">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[#222a3d] shadow-2xl mb-3 group cursor-pointer">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#c0c1ff] via-[#d0bcff] to-[#571bc1] opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full rounded-xl bg-[#171f33]">
                <svg className="w-8 h-8 drop-shadow-[0_0_12px_rgba(192,193,255,0.7)]" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 27L16 19L20 25L15 33H9L11 27Z" fill="url(#brandGrad1)"></path>
                  <path d="M19 14L24 6L28 12L23 20H17L19 14Z" fill="url(#brandGrad2)"></path>
                  <path d="M15 33L26 15L31 22L20 40H14L15 33Z" fill="url(#brandGrad3)"></path>
                  <defs>
                    <linearGradient id="brandGrad1" x1="9" x2="20" y1="19" y2="33" gradientUnits="userSpaceOnUse"><stop stopColor="#8083ff"></stop><stop offset="1" stopColor="#571bc1"></stop></linearGradient>
                    <linearGradient id="brandGrad2" x1="17" x2="28" y1="6" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#c0c1ff"></stop><stop offset="1" stopColor="#8582ff"></stop></linearGradient>
                    <linearGradient id="brandGrad3" x1="14" x2="31" y1="15" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#d0bcff"></stop><stop offset="1" stopColor="#5516be"></stop></linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <span className="text-xl text-[#dae2fd] font-semibold tracking-tight">Sprint<span className="text-[#c0c1ff] font-bold">Era</span></span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-[#2d3449] text-[#c0c1ff] text-[10px] uppercase tracking-wider font-semibold">Cloud</span>
            </div>
            <p className="text-sm text-[#c7c4d7] mt-1">Çevik iş akışınızı yönetin</p>
          </div>

          {/* Main Auth Card */}
          <div className="w-full max-w-sm rounded-xl bg-[#060e20]/80 backdrop-blur-xl p-6 shadow-2xl relative z-10 border border-[#2d3449]/40">
            <div className="mb-4">
              <h1 className="text-lg text-[#dae2fd] tracking-tight font-semibold">Tekrar hoş geldiniz</h1>
              <p className="text-xs text-[#c7c4d7] mt-0.5">Ekip çalışma alanlarınıza erişmek için giriş yapın</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/50 border border-red-800 text-red-200 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs text-[#dae2fd] font-medium flex items-center justify-between" htmlFor="email">
                  <span>İş E-postası</span>
                  <span className="text-[#c7c4d7] font-normal text-[11px]">SSO etkin</span>
                </label>
                <div className="relative flex items-center group">
                  <span className="material-symbols-outlined absolute left-3 text-[#908fa0] text-[20px] pointer-events-none">mail</span>
                  <input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="adiniz@sirket.com" 
                    required 
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#222a3d] text-[#dae2fd] placeholder:text-[#908fa0] text-sm focus:bg-[#2d3449] transition-all outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-[#dae2fd] font-medium" htmlFor="password">Şifre</label>
                  <a className="text-xs text-[#c0c1ff] hover:underline" href="#">Şifrenizi mi unuttunuz?</a>
                </div>
                <div className="relative flex items-center group">
                  <span className="material-symbols-outlined absolute left-3 text-[#908fa0] text-[20px] pointer-events-none">lock</span>
                  <input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••" 
                    required 
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#222a3d] text-[#dae2fd] placeholder:text-[#908fa0] text-sm focus:bg-[#2d3449] transition-all outline-none tracking-wider"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 p-1 text-[#c7c4d7] hover:text-[#dae2fd] flex items-center justify-center rounded transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center space-x-2.5 cursor-pointer select-none">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-4 h-4 rounded bg-[#222a3d] peer-checked:bg-[#8083ff] flex items-center justify-center transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[13px] text-[#0d0096] font-bold">check</span>
                  </div>
                  <span className="text-xs text-[#c7c4d7]">Oturumumu açık tut</span>
                </label>
                <span className="text-xs text-[#c7c4d7]/80">30 gün</span>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#8083ff] via-[#8582ff] to-[#571bc1] hover:opacity-90 text-[#0d0096] font-semibold text-sm tracking-wide shadow-lg shadow-[#571bc1]/30 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    <span>Giriş yapılıyor...</span>
                  </>
                ) : success ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>Doğrulandı</span>
                  </>
                ) : (
                  <>
                    <span>SprintEra'ya Giriş Yap</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full h-[1px] bg-[#2d3449]"></div>
              <span className="absolute bg-[#060e20] px-2.5 text-[11px] text-[#908fa0] uppercase tracking-wider">VEYA ŞUNUNLA DEVAM EDİN</span>
            </div>

            <button className="w-full py-2.5 px-4 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-sm font-medium transition-all flex items-center justify-center space-x-3 shadow-sm group">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z" fill="#4285F4"></path>
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.31 24 12 24z" fill="#34A853"></path>
                <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" fill="#FBBC05"></path>
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
              </svg>
              <span>Google ile Devam Et</span>
            </button>

            <div className="mt-4 text-center">
              <p className="text-xs text-[#c7c4d7]">
                Hesabınız yok mu? 
                <a className="font-semibold text-[#c0c1ff] hover:underline ml-1" href="#">
                  Hesap Oluşturun
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2 text-[#908fa0] relative z-10 px-4 text-center">
            <span className="material-symbols-outlined text-[16px] text-[#c3c0ff]">shield</span>
            <span className="text-[11px] leading-tight text-[#c7c4d7]/70">
              Kurumsal SSO ve 256-bit şifreleme ile korunmaktadır
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}