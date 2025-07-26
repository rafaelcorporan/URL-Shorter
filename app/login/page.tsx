"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Image from "next/image";
import { TextField, InputAdornment, IconButton, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({ username: false, password: false });
  const [loginError, setLoginError] = useState("");

  const handleShowPassword = () => setShowPassword((show) => !show);
  const handleBlur = (field: "username" | "password") => setTouched((prev) => ({ ...prev, [field]: true }));

  const usernameError = touched.username && !username;
  const passwordError = touched.password && !password;
  const isFormValid = username && password && !isLoading;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    if (!isFormValid) return;
    
    try {
      setIsLoading(true);
      const success = await login(username, password);
      
      if (success) {
        toast.success("Login successful!");
        router.push('/'); // Redirect to home/dashboard after successful login
      } else {
        setLoginError("Invalid username or password");
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError("An error occurred during login");
      toast.error("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Theme-consistent Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient overlay matching dashboard theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 opacity-60" />
        
        {/* Animated gradient blobs */}
        <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 opacity-30 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[250px] h-[250px] bg-gradient-to-tr from-yellow-200 via-orange-200 to-orange-400 opacity-25 rounded-full blur-3xl animate-blob2" />
        <div className="absolute top-[45%] left-[65%] w-[200px] h-[200px] bg-gradient-to-tl from-orange-300 via-yellow-300 to-orange-200 opacity-20 rounded-full blur-2xl animate-blob3" />
      </div>
      
      {/* URL Shortening Visual Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Animated connecting lines representing URL shortening */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ minHeight: 600 }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FF5722', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#FF9800', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#FFC107', stopOpacity: 0.3 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFC107', stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: '#FF9800', stopOpacity: 0.35 }} />
            </linearGradient>
          </defs>
          
          {/* Long URL to Short URL transformation lines */}
          <line x1="15%" y1="25%" x2="85%" y2="25%" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="15 10" className="animate-link1" />
          <line x1="25%" y1="65%" x2="75%" y2="75%" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="12 8" className="animate-link2" />
          <line x1="35%" y1="85%" x2="65%" y2="35%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="10 6" className="animate-link3" />
        </svg>
        
        {/* Analytics and performance dots */}
        <div className="absolute left-[18%] top-[24%] w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulseDot1" />
        <div className="absolute left-[82%] top-[24%] w-2 h-2 bg-yellow-500 rounded-full opacity-45 animate-pulseDot2" />
        <div className="absolute left-[28%] top-[65%] w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulseDot3" />
        <div className="absolute left-[72%] top-[75%] w-3 h-3 bg-orange-500 rounded-full opacity-50 animate-pulseDot4" />
        
        {/* Floating feature icons */}
        <div className="absolute left-[65%] top-[15%] opacity-10 animate-floatShield">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L4 7v5c0 5.25 3.75 10 8 10s8-4.75 8-10V7l-8-4z" stroke="#FF9800" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="absolute left-[25%] top-[80%] opacity-8 animate-floatLock">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#3b82f6" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Speed/performance indicators */}
        <div className="absolute left-[45%] top-[35%] w-20 h-[2px] bg-gradient-to-r from-yellow-300 via-orange-300 to-orange-500 opacity-25 rounded-full animate-speedLine1" />
        <div className="absolute left-[60%] top-[65%] w-16 h-[1px] bg-gradient-to-r from-blue-300 to-blue-400 opacity-20 rounded-full animate-speedLine2" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FF9800 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Amazon URL Shortening Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[10%] animate-urlTransform">
            <div className="text-xs font-mono text-gray-400 opacity-70 whitespace-nowrap animate-longUrl">
              https://www.amazon.com/dp/B08N5WRWNW/ref=sr_1_1?crid=2M7L8Y5Z&keywords=wireless+headphones&qid=1640995200&sprefix=wireless%2Caps%2C200&sr=8-1
            </div>
            <div className="text-sm font-mono text-yellow-500 font-bold mt-2 opacity-0 animate-shortUrl">
              yuupi.gg/ab3x
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Refined animations for professional theme */
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          33% { transform: translateY(-20px) scale(1.05) rotate(120deg); }
          66% { transform: translateY(10px) scale(0.95) rotate(240deg); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(25px) scale(1.08) rotate(180deg); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translateX(0) scale(1) rotate(0deg); }
          50% { transform: translateX(-30px) scale(1.03) rotate(180deg); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 15s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 18s ease-in-out infinite; }
        
        /* URL shortening line animations */
        @keyframes link1 { 
          0%, 100% { stroke-dashoffset: 0; opacity: 0.6; }
          50% { stroke-dashoffset: 50; opacity: 1; }
        }
        @keyframes link2 { 
          0%, 100% { stroke-dashoffset: 0; opacity: 0.4; }
          50% { stroke-dashoffset: 35; opacity: 0.8; }
        }
        @keyframes link3 { 
          0%, 100% { stroke-dashoffset: 0; opacity: 0.3; }
          50% { stroke-dashoffset: 25; opacity: 0.7; }
        }
        .animate-link1 { animation: link1 8s ease-in-out infinite; }
        .animate-link2 { animation: link2 12s ease-in-out infinite; }
        .animate-link3 { animation: link3 10s ease-in-out infinite; }
        
        /* Analytics pulse effects */
        @keyframes pulseDot1 { 
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.4); }
          50% { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(255, 152, 0, 0); }
        }
        @keyframes pulseDot2 { 
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(255, 193, 7, 0); }
        }
        @keyframes pulseDot3 { 
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { transform: scale(1.15); box-shadow: 0 0 0 5px rgba(59, 130, 246, 0); }
        }
        @keyframes pulseDot4 { 
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.4); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 10px rgba(255, 87, 34, 0); }
        }
        .animate-pulseDot1 { animation: pulseDot1 3s ease-in-out infinite; }
        .animate-pulseDot2 { animation: pulseDot2 4s ease-in-out infinite 0.5s; }
        .animate-pulseDot3 { animation: pulseDot3 3.5s ease-in-out infinite 1s; }
        .animate-pulseDot4 { animation: pulseDot4 4.5s ease-in-out infinite 1.5s; }
        
        /* Feature icon floating */
        @keyframes floatShield { 
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-15px) rotate(5deg); opacity: 0.15; }
        }
        @keyframes floatLock { 
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(12px) rotate(-3deg); opacity: 0.12; }
        }
        .animate-floatShield { animation: floatShield 9s ease-in-out infinite; }
        .animate-floatLock { animation: floatLock 11s ease-in-out infinite; }
        
        /* Performance/speed indicators */
        @keyframes speedLine1 { 
          0% { transform: translateX(-30px) scaleX(0.5); opacity: 0.2; }
          50% { transform: translateX(30px) scaleX(1); opacity: 0.4; }
          100% { transform: translateX(-30px) scaleX(0.5); opacity: 0.2; }
        }
        @keyframes speedLine2 { 
          0% { transform: translateX(25px) scaleX(0.6); opacity: 0.15; }
          50% { transform: translateX(-25px) scaleX(1.1); opacity: 0.3; }
          100% { transform: translateX(25px) scaleX(0.6); opacity: 0.15; }
        }
        .animate-speedLine1 { animation: speedLine1 6s ease-in-out infinite; }
        .animate-speedLine2 { animation: speedLine2 8s ease-in-out infinite 2s; }
        
        /* Amazon URL Shortening Animation */
        @keyframes urlTransform {
          0% { transform: translateY(-100vh); }
          15% { transform: translateY(10%); }
          35% { transform: translateY(10%); }
          50% { transform: translateY(50%); }
          85% { transform: translateY(50%); }
          100% { transform: translateY(120vh); }
        }
        @keyframes longUrl {
          0%, 40% { 
            opacity: 0.8; 
            transform: scale(1); 
            color: #9CA3AF;
          }
          45%, 55% { 
            opacity: 1; 
            transform: scale(1.05); 
            color: #6B7280;
          }
          60% { 
            opacity: 0.5; 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 0; 
            transform: scale(0.8); 
          }
        }
        @keyframes shortUrl {
          0%, 50% { 
            opacity: 0; 
            transform: translateY(10px) scale(0.8); 
          }
          60% { 
            opacity: 1; 
            transform: translateY(0) scale(1.1); 
            color: #FFC107;
          }
          80%, 100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            color: #FFC107;
          }
        }
        .animate-urlTransform { 
          animation: urlTransform 12s ease-in-out infinite;
        }
        .animate-longUrl { 
          animation: longUrl 12s ease-in-out infinite;
        }
        .animate-shortUrl { 
          animation: shortUrl 12s ease-in-out infinite;
        }
      `}</style>
      <Card className="w-full max-w-md shadow-xl border border-[#e0e0e0] bg-[#f3f3f3]/90 backdrop-blur-md" padding="lg" shadow="lg">
        <div className="flex flex-col items-center mb-8">
          <div className="floating">
            <Image src="/logo.png" alt="Yuupi!" width={120} height={48} />
          </div>
          <h2 className="text-2xl font-bold text-orange-400 mb-2 text-center" style={{ color: '#FF9800' }}>Shorten Your Links Instantly</h2>
          <p className="text-gray-700 text-center mb-4">A powerful URL shortener that helps you create short, memorable links and track their performance.</p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label htmlFor="login-username" className="text-sm font-semibold text-gray-700 mb-1 ml-1">Username</label>
            <TextField
              id="login-username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onBlur={() => handleBlur("username")}
              error={!!usernameError}
              helperText={usernameError ? "Username is required" : " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color={usernameError ? "error" : "disabled"} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton tabIndex={-1} edge="end" disabled>
                      <Lock color={usernameError ? "error" : "disabled"} />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { background: '#f5f5f5', borderRadius: 8 }
              }}
              fullWidth
              variant="outlined"
              autoComplete="username"
              sx={{ input: { color: '#18181b' } }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="login-password" className="text-sm font-semibold text-gray-700 mb-1 ml-1">Password</label>
            <TextField
              id="login-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => handleBlur("password")}
              error={!!passwordError}
              helperText={passwordError ? "Password is required" : " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color={passwordError ? "error" : "disabled"} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { background: '#f5f5f5', borderRadius: 8 }
              }}
              fullWidth
              variant="outlined"
              autoComplete="current-password"
              sx={{ input: { color: '#18181b' } }}
            />
          </div>
          {loginError && (
            <div className="text-red-600 text-center text-sm font-semibold">{loginError}</div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleLogin}
              disabled={!isFormValid}
              className={`w-1/2 py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:shadow-lg'
              }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <CircularProgress size={24} className="text-white" />
                <span className="ml-2">Signing in...</span>
              </div>
            ) : (
              <span style={{ color: 'black', fontWeight: 'bold' }}>Sign In</span>
            )}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}