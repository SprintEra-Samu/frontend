import React from 'react';

export default function Sprints() {
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/dashboard">
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/sprints">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_feed</span>
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
          <div className="flex flex-col w-full">
            
            {/* Arka Plan Glow Efektleri */}
            <div className="relative w-full">
              <div className="absolute -top-12 left-1/3 w-96 h-48 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
              <div className="absolute top-24 right-10 w-72 h-40 bg-[#571bc1]/15 rounded-full blur-2xl pointer-events-none -z-10"></div>
              
              {/* Başlık ve Aksiyon Ribbon */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#908fa0] text-xs tracking-wider uppercase font-semibold">
                    <span>ÇALIŞMA ALANI</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-[#c0c1ff]">SPRİNT YÖNETİMİ</span>
                  </div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h1 className="text-2xl font-bold text-[#dae2fd] tracking-tight">Sprintler & Çevik Döngüler</h1>
                    <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs font-mono">Q4 CADENCE</span>
                  </div>
                  <p className="text-sm text-[#c7c4d7]">Aktif sprint ilerlemesi, kapasite planlaması ve geçmiş sprint sürümleri</p>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                  <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-xs font-semibold transition-all shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px] text-[#c3c0ff]">calendar_month</span>
                    <span>Sprint Planla (Gelecek)</span>
                  </button>
                  <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-[#8083ff] via-[#8083ff] to-[#571bc1] text-[#0d0096] hover:brightness-110 text-xs font-semibold transition-all shadow-[0_0_16px_rgba(128,131,255,0.3)] active:scale-[0.99]" type="button">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    <span>+ Yeni Sprint Başlat</span>
                  </button>
                </div>
              </div>

              {/* 4'lü Üst KPI Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                
                <div className="p-4 rounded-xl bg-[#131b2e] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#908fa0] uppercase tracking-wider">Aktif Sprint</span>
                      <span className="text-base text-[#dae2fd] font-bold mt-1">Sprint #14</span>
                      <span className="text-xs text-[#c3c0ff]">Core Platform • 14 Gün Kaldı</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#8083ff]">
                      <span className="material-symbols-outlined text-[22px]">timer</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[#c7c4d7]">16 Eki - 30 Eki</span>
                      <span className="text-[#8083ff] font-bold">%68</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#222a3d] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#8083ff] to-[#c0c1ff] rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#908fa0] uppercase tracking-wider">Takım Kapasitesi</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base text-[#dae2fd] font-bold">142</span>
                        <span className="text-xs text-[#908fa0]">/ 160 SP</span>
                      </div>
                      <span className="text-xs text-[#c7c4d7]">Kullanılan: %88.7</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#d0bcff]">
                      <span className="material-symbols-outlined text-[22px]">group_work</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8083ff] animate-pulse"></span>
                    <span className="text-xs text-[#c7c4d7]">Sağlıklı ve dengeli iş temposu</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#908fa0] uppercase tracking-wider">Sprint Hızı (Velocity)</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base text-[#dae2fd] font-bold">48.5</span>
                        <span className="text-xs text-[#8083ff] font-semibold">SP</span>
                      </div>
                      <span className="text-xs text-[#908fa0]">Son 3 sprint ortalaması</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#c0c1ff]">
                      <span className="material-symbols-outlined text-[22px]">speed</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[#8083ff] font-semibold">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      <span>+%6 artış</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#908fa0] uppercase tracking-wider">Blokaj & Engel Durumu</span>
                      <span className="text-base text-[#dae2fd] font-bold mt-1">2 Açık Engel</span>
                      <span className="text-xs text-rose-400">Müdahale gerekebilir</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-rose-950/40 flex items-center justify-center text-rose-400">
                      <span className="material-symbols-outlined text-[22px]">warning</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 text-xs font-medium">1 Kritik</span>
                    <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs font-medium">1 Beklemede</span>
                  </div>
                </div>

              </div>

              {/* Aktif Sprint Detay Kartı (Spotlight) */}
              <div className="p-6 rounded-2xl bg-[#131b2e] shadow-md mb-10 border border-[#2d3449]/40">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-[#2d3449]/40">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-full bg-[#8083ff] text-[#0d0096] text-xs font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#0d0096]"></span> Aktif • 6. İş Günü
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#222a3d] text-[#dae2fd] text-xs font-mono">
                        16 Eki — 30 Eki 2024
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#222a3d] text-[#c7c4d7] text-xs">
                        Sürüm: v2.4.0-rc2
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#dae2fd] mt-1">
                      Sprint #14 — Q4 Core Platform & Auth Altyapısı
                    </h2>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-[#171f33] flex items-center gap-3 border border-[#2d3449]/40">
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-[#908fa0] uppercase">Burndown Durumu</span>
                      <span className="text-xs text-[#8083ff] font-semibold">Hedefin Önünde (-4 SP)</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#8083ff]">
                      <span className="material-symbols-outlined text-[20px]">stacked_line_chart</span>
                    </div>
                  </div>
                </div>

                {/* Sprint Hedefi */}
                <div className="p-4 rounded-xl bg-[#171f33] my-6 flex items-start gap-3 border border-[#2d3449]/40">
                  <div className="w-9 h-9 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#c3c0ff] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">flag</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">SPRİNT HEDEFİ</span>
                    <p className="text-sm text-[#dae2fd] mt-0.5 leading-relaxed">
                      OAuth2 PKCE entegrasyonu, PostgreSQL sorgu optimizasyonu ve Figma tasarım belirteçlerinin v2.4 senkronizasyonu.
                    </p>
                  </div>
                </div>

                {/* 5 Aşamalı İş Akışı Dağılımı */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#dae2fd] tracking-wide uppercase">İş Akışı & Hikaye Puanı (SP) Dağılımı</span>
                    <span className="text-xs text-[#908fa0]">Toplam: 34 Görev / 100 SP</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33] flex flex-col justify-between border border-[#2d3449]/40">
                      <div className="flex items-center justify-between"><span className="text-xs text-[#c7c4d7]">Kayıt Listesi</span><span className="px-1.5 py-0.5 rounded bg-[#222a3d] font-mono text-[11px] text-[#908fa0]">8 SP</span></div>
                      <div className="mt-3 flex items-baseline justify-between"><span className="text-lg font-bold text-[#dae2fd]">4</span><span className="text-xs text-[#908fa0]">Görev</span></div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#171f33] flex flex-col justify-between border border-[#2d3449]/40">
                      <div className="flex items-center justify-between"><span className="text-xs text-[#c7c4d7]">Yapılacaklar</span><span className="px-1.5 py-0.5 rounded bg-[#222a3d] font-mono text-[11px] text-[#c3c0ff]">15 SP</span></div>
                      <div className="mt-3 flex items-baseline justify-between"><span className="text-lg font-bold text-[#dae2fd]">6</span><span className="text-xs text-[#908fa0]">Görev</span></div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#171f33] flex flex-col justify-between border border-[#2d3449]/40">
                      <div className="flex items-center justify-between"><span className="text-xs text-[#8083ff] font-semibold">Geliştirmede</span><span className="px-1.5 py-0.5 rounded bg-[#8083ff]/20 font-mono text-[11px] text-[#8083ff]">28 SP</span></div>
                      <div className="mt-3 flex items-baseline justify-between"><span className="text-lg font-bold text-[#dae2fd]">8</span><span className="text-xs text-[#908fa0]">Görev</span></div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#171f33] flex flex-col justify-between border border-[#2d3449]/40">
                      <div className="flex items-center justify-between"><span className="text-xs text-[#d0bcff] font-semibold">İncelemede</span><span className="px-1.5 py-0.5 rounded bg-[#571bc1]/30 font-mono text-[11px] text-[#d0bcff]">12 SP</span></div>
                      <div className="mt-3 flex items-baseline justify-between"><span className="text-lg font-bold text-[#dae2fd]">4</span><span className="text-xs text-[#908fa0]">Görev</span></div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#171f33] flex flex-col justify-between col-span-2 md:col-span-1 border border-[#2d3449]/40">
                      <div className="flex items-center justify-between"><span className="text-xs text-emerald-400 font-bold">Tamamlanan</span><span className="px-1.5 py-0.5 rounded bg-emerald-950/40 font-mono text-[11px] text-emerald-300">37 SP</span></div>
                      <div className="mt-3 flex items-baseline justify-between"><span className="text-lg font-bold text-[#dae2fd]">12</span><span className="text-xs text-[#908fa0]">Görev</span></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Gelecek ve Geçmiş Sprintler Listesi */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                
                {/* Sprint 15 */}
                <div className="p-6 rounded-2xl bg-[#131b2e] shadow-sm flex flex-col justify-between hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c3c0ff] text-xs font-mono">SPRINT #15</span>
                        <span className="px-2 py-0.5 rounded bg-[#171f33] text-[#c7c4d7] text-xs">Planlanan</span>
                      </div>
                      <span className="text-xs text-[#908fa0]">01 Kas — 15 Kas</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#dae2fd]">
                      Ödeme Sistemleri & FinTech Entegrasyonu
                    </h3>
                    <p className="text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                      Stripe Billing webhook optimizasyonları, 3D Secure v2 ödeme akışı ve kurumsal faturalama paneli geliştirmeleri.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#2d3449]/40">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[#dae2fd] font-semibold font-mono">52 SP Planlandı</span>
                      <span className="text-[#c3c0ff] font-medium">%75 Doluluk</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#222a3d] rounded-full overflow-hidden">
                      <div className="h-full bg-[#c3c0ff] rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Sprint 16 */}
                <div className="p-6 rounded-2xl bg-[#131b2e] shadow-sm flex flex-col justify-between hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#d0bcff] text-xs font-mono">SPRINT #16</span>
                        <span className="px-2 py-0.5 rounded bg-[#171f33] text-[#c7c4d7] text-xs">Taslak Aşamasında</span>
                      </div>
                      <span className="text-xs text-[#908fa0]">16 Kas — 30 Kas</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#dae2fd]">
                      Mobil Uygulama v2 Beta Lansmanı
                    </h3>
                    <p className="text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                      React Native offline-first senkronizasyon mekanizması, push bildirim servisleri ve TestFlight dağıtım testleri.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#2d3449]/40">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[#dae2fd] font-semibold font-mono">18 SP İlk Taslak</span>
                      <span className="text-[#908fa0] font-medium">%22 Hazırlık</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#222a3d] rounded-full overflow-hidden">
                      <div className="h-full bg-[#571bc1] rounded-full" style={{ width: '22%' }}></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Alt Bilgi & Retrospektif Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#131b2e] via-[#171f33] to-[#222a3d] shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-[#2d3449]/40 relative overflow-hidden">
                <div className="flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#8083ff]/20 flex items-center justify-center text-[#8083ff] shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[26px]">event_repeat</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-[#8083ff] font-semibold">YAKLAŞAN TAKIM BULUŞMASI</span>
                    <p className="text-base font-semibold text-[#dae2fd] mt-0.5">
                      Sprint #14 Retrospektif Toplantısı 28 Ekim Cuma 16:30 için takvimlendi.
                    </p>
                    <span className="text-xs text-[#c7c4d7] mt-0.5">Katılımcılar: Mühendislik & Ürün Ekibi (14 kişi) • Google Meet Bağlantısı Hazır</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 z-10 shrink-0">
                  <button className="h-10 px-4 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-xs font-medium transition-all" type="button">
                    Gündemi Gör
                  </button>
                  <button className="h-10 px-4 rounded-xl bg-[#8083ff] hover:bg-[#c0c1ff] text-[#0d0096] text-xs font-semibold transition-all shadow-md" type="button">
                    Geri Bildirim Ekle
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}