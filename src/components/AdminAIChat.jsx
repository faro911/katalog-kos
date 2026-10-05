import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Settings, 
  Lock, 
  Unlock, 
  Key, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  ArrowLeft, 
  RefreshCw, 
  Copy, 
  Check, 
  ShieldCheck,
  Building2,
  Trash2
} from 'lucide-react';
import { testGitHubConnection, getFileFromGitHub, commitFileToGitHub } from '../services/githubService';
import { processKostUpdateWithAI, testGeminiConnection } from '../services/aiService';

function GithubIcon({ className = "w-3.5 h-3.5 text-gray-800" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const DEFAULT_PIN = '911911';

export default function AdminAIChat() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('kost_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [githubToken, setGithubToken] = useState(() => localStorage.getItem('kost_github_token') || '');
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('kost_gemini_key') || '');
  const [customPin, setCustomPin] = useState(() => localStorage.getItem('kost_custom_pin') || DEFAULT_PIN);
  const [repoOwner, setRepoOwner] = useState(() => localStorage.getItem('kost_repo_owner') || 'faro911');
  const [repoName, setRepoName] = useState(() => localStorage.getItem('kost_repo_name') || 'katalog-kos');
  const [testingGithub, setTestingGithub] = useState(false);
  const [githubStatus, setGithubStatus] = useState(null);
  const [testingGemini, setTestingGemini] = useState(false);
  const [geminiStatus, setGeminiStatus] = useState(null);

  // Chat State
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('kost_chat_history');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'welcome',
        sender: 'ai',
        text: 'Halo Mas Fathur! 👋\n\nSaya asisten AI pengelola katalog kos Anda. Anda bisa mengetik instruksi langsung lewat HP, seperti:\n\n• **Tambah Kos:** \"Tolong buatkan kos baru dari link Google Maps https://maps.app.goo.gl/xxx dengan 2 kamar AC & Kipas\"\n• **Ubah Harga:** \"Ubah harga kamar AC Sunflower jadi 1,4 juta per bulan\"\n• **Ubah Status:** \"Tolong ubah status Kost 43 jadi TOLAK\" atau \"Aktifkan lagi Hanida\"\n\nSetelah saya proses, perubahan akan otomatis di-commit & push ke GitHub dan langsung online di Vercel dalam ~30 detik!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ];
  });
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentStep]);

  // Save chat history to localStorage
  useEffect(() => {
    localStorage.setItem('kost_chat_history', JSON.stringify(messages));
  }, [messages]);

  // Handle PIN Login
  const handlePinSubmit = (e) => {
    e.preventDefault();
    const validPin = localStorage.getItem('kost_custom_pin') || DEFAULT_PIN;
    if (pinInput === validPin) {
      setIsAuthenticated(true);
      localStorage.setItem('kost_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('PIN salah. Silakan coba lagi.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('kost_admin_auth');
    setPinInput('');
  };

  // Save Settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    localStorage.setItem('kost_github_token', githubToken.trim());
    localStorage.setItem('kost_gemini_key', geminiKey.trim());
    localStorage.setItem('kost_custom_pin', customPin.trim());
    localStorage.setItem('kost_repo_owner', repoOwner.trim());
    localStorage.setItem('kost_repo_name', repoName.trim());
    setShowSettings(false);
  };

  // Test GitHub Connection
  const handleTestGitHub = async () => {
    if (!githubToken) {
      setGithubStatus({ success: false, message: 'Masukkan token GitHub terlebih dahulu.' });
      return;
    }
    setTestingGithub(true);
    setGithubStatus(null);
    const res = await testGitHubConnection(githubToken.trim(), repoOwner.trim(), repoName.trim());
    setTestingGithub(false);
    setGithubStatus(res);
  };

  // Test Gemini API Connection
  const handleTestGemini = async () => {
    if (!geminiKey) {
      setGeminiStatus({ success: false, message: 'Masukkan API Key Gemini terlebih dahulu.' });
      return;
    }
    setTestingGemini(true);
    setGeminiStatus(null);
    const res = await testGeminiConnection(geminiKey.trim());
    setTestingGemini(false);
    setGeminiStatus(res);
  };

  // Copy link helper
  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Send message & execute AI update
  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isProcessing) return;

    if (!githubToken || !geminiKey) {
      setShowSettings(true);
      return;
    }

    const userMessageId = Date.now().toString();
    const newUserMessage = {
      id: userMessageId,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsProcessing(true);

    try {
      // Step 1: Ambil data saat ini dari GitHub
      setCurrentStep('1/3 Mengambil data katalog kos terkini dari GitHub...');
      const { content: currentCode, sha } = await getFileFromGitHub(
        githubToken.trim(),
        repoOwner.trim(),
        repoName.trim(),
        'src/data/kostData.js'
      );

      // Step 2: Proses dengan Gemini AI
      setCurrentStep('2/3 Menganalisis instruksi & meracik kode dengan Gemini AI...');
      const aiResult = await processKostUpdateWithAI(geminiKey.trim(), currentCode, text.trim());

      // Step 3: Kirim Commit & Push ke GitHub
      setCurrentStep('3/3 Mengirim commit & push ke branch main di GitHub...');
      const commitRes = await commitFileToGitHub(
        githubToken.trim(),
        repoOwner.trim(),
        repoName.trim(),
        'src/data/kostData.js',
        aiResult.updatedCode,
        aiResult.commitMessage || 'feat: update katalog kos via AI Assistant',
        sha
      );

      const generatedUrl = aiResult.slug 
        ? `https://katalog-kos-new.vercel.app/${aiResult.slug.replace(/^\//, '')}`
        : null;

      const aiResponse = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResult.summary,
        slugUrl: generatedUrl,
        commitUrl: commitRes.commitUrl,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          isError: true,
          text: `Terjadi kendala saat memproses permintaan: ${err.message}\n\nPastikan Token GitHub dan API Key Gemini sudah valid di tombol ⚙️ Pengaturan.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setIsProcessing(false);
      setCurrentStep('');
    }
  };

  // RENDER: Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 font-sans text-white">
        <div className="max-w-sm w-full bg-gray-800/90 backdrop-blur-xl border border-gray-700/80 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">AI Kos Manager</h1>
            <p className="text-xs text-gray-400 mt-1">
              Masukkan PIN Admin untuk mengakses panel pembaruan kos via AI.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Masukkan 6 Digit PIN"
                className="w-full text-center tracking-widest text-2xl font-bold py-3 px-4 bg-gray-900/80 border border-gray-700 rounded-2xl focus:outline-none focus:border-rose-500 text-white placeholder:text-gray-500 placeholder:text-sm placeholder:tracking-normal transition-all"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-rose-400 mt-2 font-medium">{pinError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-rose-600 hover:bg-rose-500 active:scale-98 text-white font-semibold rounded-2xl shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Buka Panel AI</span>
            </button>
          </form>

          <div className="pt-2 border-t border-gray-700/50">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda Katalog</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: Main Chat Screen
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 py-3 shadow-2xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              title="Kembali ke Katalog"
            >
              <ArrowLeft className="w-4 h-4" />
            </a>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-gray-900">
                  AI Kos Manager
                </span>
                <span className={`w-2 h-2 rounded-full ${githubToken && geminiKey ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              </div>
              <p className="text-[11px] text-gray-500">
                Auto-Commit to GitHub & Vercel Deploy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2.5 rounded-xl border transition-all relative cursor-pointer ${
                !githubToken || !geminiKey
                  ? 'bg-amber-50 border-amber-300 text-amber-700'
                  : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
              }`}
              title="Pengaturan Kunci API"
            >
              <Settings className="w-4 h-4" />
              {(!githubToken || !geminiKey) && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></span>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
              title="Kunci / Logout"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Warning banner if keys are missing */}
      {(!githubToken || !geminiKey) && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs text-amber-800">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Kunci GitHub Token & Gemini Key belum diatur. Klik tombol pengaturan untuk mengisinya sekali saja.
              </span>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className="px-3 py-1 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shrink-0 cursor-pointer"
            >
              Isi Kunci
            </button>
          </div>
        </div>
      )}

      {/* Messages Scroll Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl w-full mx-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-white ${
                isUser ? 'bg-gray-900' : 'bg-gradient-to-tr from-rose-500 to-indigo-600 shadow-md shadow-rose-500/20'
              }`}>
                {isUser ? <span className="text-xs font-bold">F</span> : <Bot className="w-4 h-4" />}
              </div>

              {/* Bubble */}
              <div className={`max-w-[85%] sm:max-w-lg rounded-3xl p-4 sm:p-5 shadow-xs space-y-3 ${
                isUser
                  ? 'bg-gray-900 text-white rounded-tr-xs'
                  : msg.isError
                    ? 'bg-rose-50 border border-rose-200 text-rose-900 rounded-tl-xs'
                    : 'bg-white border border-gray-200/80 text-gray-800 rounded-tl-xs'
              }`}>
                <div className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                  {msg.text}
                </div>

                {/* Slug Link Card if created */}
                {msg.slugUrl && (
                  <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Website Sudah Live:
                      </span>
                      <button
                        onClick={() => handleCopyLink(msg.slugUrl, msg.id)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-white px-2 py-1 rounded-md border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === msg.id ? 'Tersalin!' : 'Salin Link'}</span>
                      </button>
                    </div>

                    <a
                      href={msg.slugUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline break-all block"
                    >
                      {msg.slugUrl}
                    </a>
                  </div>
                )}

                {/* Commit info link */}
                {msg.commitUrl && (
                  <a
                    href={msg.commitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>Lihat Bukti Commit di GitHub</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}

                <div className={`text-[10px] text-right ${isUser ? 'text-gray-400' : 'text-gray-400'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {/* Live Processing Indicator */}
        {isProcessing && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-600 text-white flex items-center justify-center shrink-0 animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-rose-200 rounded-3xl rounded-tl-xs p-4 shadow-sm flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-rose-600 animate-spin" />
              <span className="text-xs font-medium text-gray-700 animate-pulse">
                {currentStep || 'Sedang memproses...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* Quick Action Suggestion Chips */}
      <div className="px-4 py-2 max-w-4xl w-full mx-auto overflow-x-auto no-scrollbar flex items-center gap-2">
        <button
          onClick={() => setInputValue('Tolong buatkan kos baru dari link Google Maps ')}
          className="text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-1.5 font-medium text-gray-700 whitespace-nowrap shadow-2xs transition-colors shrink-0 cursor-pointer"
        >
          ➕ Tambah Kos dari Google Maps
        </button>
        <button
          onClick={() => setInputValue('Tolong ubah harga kamar kos ')}
          className="text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-1.5 font-medium text-gray-700 whitespace-nowrap shadow-2xs transition-colors shrink-0 cursor-pointer"
        >
          💰 Ubah Harga Kamar
        </button>
        <button
          onClick={() => setInputValue('Tolong ubah status kos jadi TOLAK ')}
          className="text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-1.5 font-medium text-gray-700 whitespace-nowrap shadow-2xs transition-colors shrink-0 cursor-pointer"
        >
          🚫 Set Status TOLAK
        </button>
        <button
          onClick={() => setInputValue('Tolong aktifkan kembali status kos ')}
          className="text-xs bg-white hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-1.5 font-medium text-gray-700 whitespace-nowrap shadow-2xs transition-colors shrink-0 cursor-pointer"
        >
          ✅ Aktifkan Kos Kembali
        </button>
        <button
          onClick={() => {
            if (confirm('Hapus riwayat obrolan AI?')) {
              localStorage.removeItem('kost_chat_history');
              window.location.reload();
            }
          }}
          className="text-xs text-gray-400 hover:text-rose-600 p-1.5 transition-colors shrink-0 cursor-pointer"
          title="Bersihkan Percakapan"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Chat Input Bar */}
      <footer className="bg-white border-t border-gray-200 p-4 sticky bottom-0 z-20">
        <div className="max-w-4xl mx-auto flex items-end gap-2.5">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Ketik instruksi... (contoh: Tambahkan kos dari https://maps.app.goo.gl/...)"
            rows={1}
            disabled={isProcessing}
            className="flex-1 resize-none py-3 px-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-900 placeholder:text-gray-400 max-h-32 transition-all"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isProcessing}
            className="p-3 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-2xl shadow-md transition-all active:scale-95 shrink-0 cursor-pointer disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </footer>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                <Settings className="w-5 h-5 text-gray-700" />
                <span>Pengaturan Kunci API</span>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              
              {/* GitHub Token Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-gray-800" />
                    GitHub Personal Access Token (PAT)
                  </span>
                  <a
                    href="https://github.com/settings/tokens/new?description=Katalog+Kos+AI&scopes=repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-rose-600 hover:underline"
                  >
                    Buat Token ↗
                  </a>
                </label>
                <input
                  type="password"
                  value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxx"
                  className="w-full text-xs py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 font-mono"
                />
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-gray-400">
                    Izin centang: <span className="font-semibold text-gray-600">repo</span> (Full control)
                  </p>
                  <button
                    type="button"
                    onClick={handleTestGitHub}
                    disabled={testingGithub}
                    className="text-[11px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    {testingGithub ? 'Menguji...' : 'Uji Koneksi'}
                  </button>
                </div>
                {githubStatus && (
                  <p className={`text-[11px] font-semibold ${githubStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {githubStatus.success ? `✅ Terhubung ke ${githubStatus.repoName}` : `❌ ${githubStatus.message}`}
                  </p>
                )}
              </div>

              {/* Gemini API Key Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Google Gemini API Key
                  </span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-600 hover:underline"
                  >
                    Ambil Kunci Gratis ↗
                  </a>
                </label>
                <input
                  type="password"
                  value={geminiKey}
                  onChange={(e) => setGeminiKey(e.target.value)}
                  placeholder="AIzaSyxxxxxxxxxxxx"
                  className="w-full text-xs py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 font-mono"
                />
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-gray-400">
                    Didapat gratis dari Google AI Studio tanpa kartu kredit.
                  </p>
                  <button
                    type="button"
                    onClick={handleTestGemini}
                    disabled={testingGemini}
                    className="text-[11px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    {testingGemini ? 'Menguji...' : 'Uji Gemini'}
                  </button>
                </div>
                {geminiStatus && (
                  <p className={`text-[11px] font-semibold ${geminiStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {geminiStatus.success ? `✅ ${geminiStatus.message}` : `❌ ${geminiStatus.message}`}
                  </p>
                )}
              </div>

              {/* PIN Setting */}
              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-gray-500" />
                  PIN Admin (Akses HP)
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={customPin}
                  onChange={(e) => setCustomPin(e.target.value)}
                  placeholder="911911"
                  className="w-full text-xs py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 font-mono"
                />
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs font-semibold shadow-md transition-colors cursor-pointer"
                >
                  Simpan Pengaturan
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
