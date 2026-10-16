import React from 'react';

export default function Kanban() {
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/kanban">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>view_kanban</span>
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
          <div className="flex flex-col w-full">
            
            {/* Breadcrumb & Sprint Meta */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[#c7c4d7] text-xs">
                    <span>SprintEra</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span>Projeler</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-[#dae2fd]">Core Platform</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-[#c0c1ff] font-semibold">Kanban Panosu</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-1">
                    <h1 className="text-2xl font-bold text-[#dae2fd] tracking-tight flex items-center gap-2">
                      <span>Sprint 14 Kanban Panosu</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#571bc1]/40 text-[#d0bcff] text-xs font-semibold">
                        Sprint 14 • Q3
                      </span>
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131b2e] text-[#c0c1ff] text-xs shadow-sm border border-[#2d3449]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff] animate-pulse"></span>
                        14 İş Günü Kaldı
                      </span>
                      <span className="text-[#c7c4d7] text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">calendar_today</span> 16 Eki – 30 Eki
                      </span>
                    </div>
                  </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center p-1 rounded-xl bg-[#060e20] border border-[#2d3449]/40">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222a3d] text-[#dae2fd] text-xs font-semibold shadow-sm" type="button">
                      <span className="material-symbols-outlined text-[18px] text-[#c0c1ff]">view_kanban</span>
                      <span>Pano</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] text-xs font-medium transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                      <span>Liste</span>
                    </button>
                  </div>
                  <button className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#8083ff] text-[#0d0096] hover:bg-[#c0c1ff] text-xs font-semibold transition-all shadow-md" type="button">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    <span>Yeni Kart</span>
                  </button>
                </div>
              </div>

              {/* Metrikler Bandı */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 rounded-xl bg-[#131b2e] border border-[#2d3449]/40 shadow-sm">
                <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-[#060e20]">
                  <span className="text-[#c7c4d7] text-xs">Toplam İş Yükü</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-[#dae2fd]">24</span>
                    <span className="text-xs text-[#c7c4d7]">Kart</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-[#060e20]">
                  <span className="text-[#c7c4d7] text-xs">Hikaye Puanı (SP)</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-[#c0c1ff]">69</span>
                    <span className="text-xs text-[#c7c4d7]">Puan</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-[#060e20]">
                  <span className="text-[#c7c4d7] text-xs">Tamamlanan SP</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-[#d0bcff]">24</span>
                    <span className="text-xs text-[#c7c4d7]">/ 69 SP</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-4 py-2 rounded-lg bg-[#060e20]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#c7c4d7] text-xs">Sprint İlerlemesi</span>
                    <span className="text-[#c0c1ff] text-xs font-semibold">%62</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#222a3d] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#8083ff] to-[#d0bcff]" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>

              {/* Arama ve Filtre Bandı */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#131b2e] border border-[#2d3449]/40 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
                  <div className="relative flex items-center min-w-[220px] max-w-xs flex-1">
                    <span className="material-symbols-outlined absolute left-3 text-[#c7c4d7] text-[18px]">search</span>
                    <input className="w-full h-8 pl-9 pr-12 bg-[#060e20] rounded-lg text-[#dae2fd] placeholder:text-[#908fa0] text-xs focus:outline-none focus:bg-[#171f33] transition-colors" placeholder="Kartlarda ara... (⌘F)" type="text" />
                    <kbd className="absolute right-2 text-[10px] text-[#908fa0] font-mono">⌘F</kbd>
                  </div>
                  <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#060e20] text-[#c7c4d7] hover:text-[#dae2fd] text-xs transition-colors" type="button">
                    <span className="w-2 h-2 rounded-full bg-[#c3c0ff]"></span>
                    <span>Tüm Epikler</span>
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#060e20] text-[#c7c4d7] hover:text-[#dae2fd] text-xs transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px] text-rose-400">flag</span>
                    <span>Öncelik</span>
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Kanban Panosu Canvas (5 Sütun) */}
            <div className="w-full overflow-x-auto pb-6">
              <div className="min-w-[1240px] grid grid-cols-5 gap-4 items-start">
                
                {/* 1. Sütun: Kayıt Listesi (Backlog) */}
                <div className="flex flex-col rounded-2xl bg-[#131b2e]/70 p-3 gap-3 border border-[#2d3449]/40 shadow-sm">
                  <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#908fa0]"></span>
                      <span className="text-xs font-semibold text-[#dae2fd]">Kayıt Listesi</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-[#222a3d] text-[#c7c4d7] text-xs">4</span>
                    </div>
                    <span className="text-xs text-[#c7c4d7]">8 SP</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all shadow-md cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c0c1ff] text-xs">Auth Service</span>
                        <span className="px-2 py-0.5 rounded bg-[#060e20] text-[#c7c4d7] text-xs">3 SP</span>
                      </div>
                      <h3 className="text-xs font-medium text-[#dae2fd] mb-3">GraphQL schema migration for mobile auth tokens</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40 text-xs">
                        <span className="text-rose-400 font-medium">Düşük</span>
                        <div className="w-6 h-6 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-bold">AL</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Sütun: Yapılacaklar (To Do) */}
                <div className="flex flex-col rounded-2xl bg-[#131b2e]/70 p-3 gap-3 border border-[#2d3449]/40 shadow-sm">
                  <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#c3c0ff]"></span>
                      <span className="text-xs font-semibold text-[#dae2fd]">Yapılacaklar</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-[#222a3d] text-[#c7c4d7] text-xs">5</span>
                    </div>
                    <span className="text-xs text-[#c7c4d7]">12 SP</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all shadow-md cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c0c1ff] text-xs">Auth Service v2.4</span>
                        <span className="text-xs text-[#c7c4d7]">1/3</span>
                      </div>
                      <h3 className="text-xs font-medium text-[#dae2fd] mb-3">OAuth2 PKCE flow for mobile SSO integration</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40 text-xs">
                        <span className="text-rose-400 font-medium">Yüksek</span>
                        <div className="w-6 h-6 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-bold">BU</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Sütun: Geliştirmede (In Progress) */}
                <div className="flex flex-col rounded-2xl bg-[#131b2e]/70 p-3 gap-3 border border-[#2d3449]/40 shadow-sm relative">
                  <div className="absolute top-0 left-4 right-4 h-0.5 bg-[#8083ff] rounded-full"></div>
                  <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8083ff] animate-pulse"></span>
                      <span className="text-xs font-semibold text-[#dae2fd]">Geliştirmede</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-[#8083ff]/20 text-[#c0c1ff] text-xs">4</span>
                    </div>
                    <span className="text-xs text-[#c0c1ff]">16 SP</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all shadow-md cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c0c1ff] text-xs">Core API</span>
                        <span className="text-xs text-rose-400">Bugün 18:00</span>
                      </div>
                      <h3 className="text-xs font-medium text-[#dae2fd] mb-2">PostgreSQL query optimization for sprint velocity graphs</h3>
                      <div className="w-full h-1.5 rounded-full bg-[#222a3d] overflow-hidden mb-2">
                        <div className="h-full rounded-full bg-[#8083ff]" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40 text-xs">
                        <span className="text-rose-400 font-semibold">Acil</span>
                        <div className="w-6 h-6 rounded-full bg-[#571bc1]/40 text-[#d0bcff] flex items-center justify-center font-bold">SR</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Sütun: İncelemede (In Review) */}
                <div className="flex flex-col rounded-2xl bg-[#131b2e]/70 p-3 gap-3 border border-[#2d3449]/40 shadow-sm">
                  <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d0bcff]"></span>
                      <span className="text-xs font-semibold text-[#dae2fd]">İncelemede</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-[#222a3d] text-[#c7c4d7] text-xs">3</span>
                    </div>
                    <span className="text-xs text-[#c7c4d7]">9 SP</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33] hover:bg-[#222a3d] transition-all shadow-md cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#d0bcff] text-xs">Design System</span>
                        <span className="text-xs text-[#c0c1ff]">#418 PR</span>
                      </div>
                      <h3 className="text-xs font-medium text-[#dae2fd] mb-3">Figma component tokens v2.4 spec review</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40 text-xs">
                        <span className="text-[#c7c4d7]">Orta</span>
                        <div className="w-6 h-6 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-bold">AL</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Sütun: Tamamlandı (Done) */}
                <div className="flex flex-col rounded-2xl bg-[#131b2e]/70 p-3 gap-3 border border-[#2d3449]/40 shadow-sm">
                  <div className="flex items-center justify-between px-1 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-xs font-semibold text-[#dae2fd]">Tamamlandı</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-emerald-950/40 text-emerald-300 text-xs">8</span>
                    </div>
                    <span className="text-xs text-emerald-400">24 SP</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-[#171f33]/80 hover:bg-[#171f33] transition-all shadow-md opacity-90 cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#222a3d] text-emerald-300 text-xs">Security</span>
                        <span className="text-xs text-emerald-400">5/5 alt görev</span>
                      </div>
                      <h3 className="text-xs font-medium text-[#c7c4d7] line-through mb-3">SSO enterprise SAML login integration testing</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40 text-xs">
                        <span className="text-emerald-400">Dün bitti</span>
                        <div className="w-6 h-6 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-bold">AL</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}