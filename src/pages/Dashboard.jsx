import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans antialiased min-h-screen selection:bg-[#8083ff] selection:text-[#0d0096]">
      {/* Üst Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#131b2e]/90 backdrop-blur-xl border-b border-[#2d3449]/40 shadow-md">
        <div className="h-16 w-full px-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#571bc1] via-[#8083ff] to-[#8582ff] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[#0d0096] text-[22px]">bolt</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold tracking-tight text-[#dae2fd]">Sprint<span className="text-[#c0c1ff]">Era</span></span>
                <span className="px-1.5 py-0.5 rounded bg-[#2d3449] text-[#c7c4d7] text-[10px] tracking-wider uppercase font-semibold">CLOUD</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl mx-auto hidden md:block">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-4 text-[#c7c4d7] text-[20px] pointer-events-none">search</span>
              <input className="w-full h-10 pl-11 pr-16 bg-[#171f33] rounded-xl text-[#dae2fd] placeholder:text-[#908fa0] text-sm focus:outline-none focus:ring-1 focus:ring-[#c0c1ff] focus:bg-[#222a3d] transition-all" placeholder="Görev, proje, doküman ara..." type="text" />
              <kbd className="absolute right-4 px-1.5 py-0.5 bg-[#2d3449] rounded text-[#c7c4d7] text-xs pointer-events-none">⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#8083ff] text-[#0d0096] hover:bg-[#c0c1ff] font-medium text-sm transition-all shadow-md" type="button">
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Yeni Görev</span>
            </button>
            <div className="flex items-center gap-2">
              <button aria-label="Bildirimler" className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#c7c4d7] hover:text-[#dae2fd] hover:bg-[#171f33] transition-all" type="button">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#131b2e]"></span>
              </button>
              <button aria-label="Yardım" className="w-9 h-9 rounded-lg flex items-center justify-center text-[#c7c4d7] hover:text-[#dae2fd] hover:bg-[#171f33] transition-all" type="button">
                <span className="material-symbols-outlined text-[20px]">help</span>
              </button>
            </div>
            <div className="relative flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#c0c1ff] flex items-center justify-center text-[#0d0096] font-bold text-xs shadow-inner">
                BU
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#c0c1ff] ring-2 ring-[#131b2e]"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Sol Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#060e20]/80 backdrop-blur-xl z-30 flex flex-col justify-between py-6 border-r border-[#2d3449]/40">
        <div className="px-4 flex flex-col gap-4">
          <div className="px-4 py-1 text-xs uppercase tracking-wider text-[#908fa0] font-semibold">ÇALIŞMA ALANI</div>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/dashboard">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Kontrol Paneli</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/projects">
              <span className="material-symbols-outlined text-[20px]">folder_open</span>
              <span>Projeler</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/my-tasks">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>Görevlerim</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/kanban">
              <span className="material-symbols-outlined text-[20px]">view_kanban</span>
              <span>Kanban Panosu</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/sprints">
              <span className="material-symbols-outlined text-[20px]">dynamic_feed</span>
              <span>Sprintler</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/reports">
              <span className="material-symbols-outlined text-[20px]">bar_chart</span>
              <span>Raporlar</span>
            </a>
          </nav>
        </div>
        <div className="px-4 flex flex-col gap-2">
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="#">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>Ayarlar</span>
            </a>
          </nav>
          <div className="mx-4 p-2.5 rounded-xl bg-[#222a3d]/40 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c0c1ff] animate-pulse"></div>
            <span className="text-xs text-[#c7c4d7]">v2.4 Canlı Sürüm</span>
          </div>
        </div>
      </aside>

      {/* Ana İçerik Alanı */}
      <div className="pl-64 min-h-screen flex flex-col pt-16">
        <main className="w-full flex-1 p-8 bg-[#0b1326] relative overflow-x-hidden">
          
          {/* Karşılama ve Sprint Başlığı */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-[#dae2fd] tracking-tight">Tekrar hoş geldin, Burcu</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#222a3d] text-[#c0c1ff] text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff] animate-ping"></span>
                  Sprint 14 Aktif
                </span>
              </div>
              <p className="text-sm text-[#c7c4d7]">İşte 4 aktif sprint boyunca bugün ilgilenmen gerekenler.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center bg-[#131b2e] px-4 py-2 rounded-xl text-sm text-[#dae2fd] border border-[#2d3449]/40 cursor-pointer hover:bg-[#171f33]">
                <span className="material-symbols-outlined text-[18px] text-[#8083ff] mr-2">dynamic_feed</span>
                <span>Sprint 14 • Q3</span>
              </div>
              <button className="inline-flex items-center gap-1.5 bg-[#8083ff] hover:bg-[#c0c1ff] text-[#0d0096] text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md" type="button">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Hızlı Ekle</span>
              </button>
            </div>
          </div>

          {/* 3'lü Metrik Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#131b2e] rounded-xl p-6 flex flex-col justify-between shadow-lg border border-[#2d3449]/40">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#908fa0]">HIZ GÖSTERGESİ</span>
                  <h3 className="text-base font-semibold text-[#dae2fd] mt-1">Tamamlanan Görevler</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-[#c0c1ff]">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#dae2fd]">28</span>
                    <span className="text-sm text-[#908fa0]">/ 34</span>
                  </div>
                  <span className="text-xs text-[#c0c1ff] font-medium mt-1 block">Geçen haftaya göre +%18</span>
                </div>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle className="text-[#222a3d]" cx="32" cy="32" fill="none" r="26" stroke="currentColor" strokeWidth="5"></circle>
                    <circle className="text-[#8083ff]" cx="32" cy="32" fill="none" r="26" stroke="currentColor" strokeDasharray="163.3" strokeDashoffset="32.6" strokeLinecap="round" strokeWidth="5"></circle>
                  </svg>
                  <span className="absolute text-xs font-bold text-[#c0c1ff]">82%</span>
                </div>
              </div>
            </div>

            <div className="bg-[#131b2e] rounded-xl p-6 flex flex-col justify-between shadow-lg border border-[#2d3449]/40">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#908fa0]">DİKKAT GEREKTİREN</span>
                  <h3 className="text-base font-semibold text-[#dae2fd] mt-1">Geciken Maddeler</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-rose-400">
                  <span className="material-symbols-outlined text-[20px]">warning</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-rose-400">3</span>
                    <span className="text-sm text-[#c7c4d7]">bekleyen madde</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-300 text-xs font-semibold">2 Yüksek</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#222a3d] text-[#c7c4d7] text-xs">1 Orta</span>
                  </div>
                </div>
                <span className="text-xs text-rose-400 flex items-center gap-1 font-medium">Acil SLA</span>
              </div>
            </div>

            <div className="bg-[#131b2e] rounded-xl p-6 flex flex-col justify-between shadow-lg border border-[#2d3449]/40">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#908fa0]">PORTFÖY KAPSAMI</span>
                  <h3 className="text-base font-semibold text-[#dae2fd] mt-1">Aktif Projeler</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-[#d0bcff]">
                  <span className="material-symbols-outlined text-[20px]">lan</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-2xl font-bold text-[#dae2fd]">6 Proje</span>
                  <span className="text-xs text-[#d0bcff] font-semibold">%84 Yolunda</span>
                </div>
                <div className="w-full bg-[#222a3d] h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#571bc1] to-[#8083ff] h-2 rounded-full" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Görevler ve Aktiviteler Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-[#131b2e] rounded-xl p-6 shadow-lg border border-[#2d3449]/40">
              <h2 className="text-lg font-semibold text-[#dae2fd] mb-4">Bana Atananlar (Assigned to Me)</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all flex items-center justify-between border border-[#2d3449]/40">
                  <div>
                    <p className="text-sm font-semibold text-[#dae2fd]">Mobil SSO için OAuth2 PKCE akışını uygula</p>
                    <p className="text-xs text-[#908fa0] mt-1">Auth Service v2.4 • Bugün, 17:00</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-950/60 text-rose-300 text-xs font-semibold">Yüksek</span>
                </div>
                <div className="p-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all flex items-center justify-between border border-[#2d3449]/40">
                  <div>
                    <p className="text-sm font-semibold text-[#dae2fd]">Sprint hızı için PostgreSQL sorgu optimizasyonu</p>
                    <p className="text-xs text-[#908fa0] mt-1">Core API • Yarın, 12:00</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-950/60 text-rose-300 text-xs font-semibold">Yüksek</span>
                </div>
                <div className="p-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all flex items-center justify-between border border-[#2d3449]/40">
                  <div>
                    <p className="text-sm font-semibold text-[#dae2fd]">Tasarım Sistemi için Figma bileşen belirteçleri</p>
                    <p className="text-xs text-[#908fa0] mt-1">Design System • 28 Eki</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#222a3d] text-[#c0c1ff] text-xs font-semibold">Orta</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#131b2e] rounded-xl p-6 shadow-lg border border-[#2d3449]/40">
              <h2 className="text-lg font-semibold text-[#dae2fd] mb-4">Son Aktiviteler</h2>
              <div className="space-y-4 text-xs text-[#c7c4d7]">
                <div className="border-l-2 border-[#8083ff] pl-3">
                  <p className="text-[#dae2fd] font-medium">Sarah Chen #412 numaralı PR'ı birleştirdi</p>
                  <p className="text-[10px] text-[#908fa0] mt-0.5">12 dakika önce</p>
                </div>
                <div className="border-l-2 border-[#571bc1] pl-3">
                  <p className="text-[#dae2fd] font-medium">Marcus faturalandırma webhook'larını güncelledi</p>
                  <p className="text-[10px] text-[#908fa0] mt-0.5">45 dakika önce</p>
                </div>
                <div className="border-l-2 border-[#8083ff] pl-3">
                  <p className="text-[#dae2fd] font-medium">Elena Rostova tasarım sistemini onayladı</p>
                  <p className="text-[10px] text-[#908fa0] mt-0.5">2 saat önce</p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}