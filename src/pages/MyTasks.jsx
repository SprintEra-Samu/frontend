import React from 'react';

export default function MyTasks() {
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/my-tasks">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
          <div className="flex flex-col w-full relative">
            
            {/* Ambient Glow */}
            <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-12 right-10 w-80 h-80 bg-[#571bc1]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative flex flex-col gap-6">
              
              {/* Üst Profil ve Aksiyon Barı */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c0c1ff] text-xs uppercase tracking-wider font-semibold">Kişisel Çalışma Alanı</span>
                    <span className="text-[#908fa0] text-xs">•</span>
                    <span className="text-[#c7c4d7] text-xs">Sprint #42 (Gün 4 / 10)</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-[#dae2fd]">Görevlerim</h1>
                  <p className="text-sm text-[#c7c4d7]">
                    Burcu Uysal için kişisel çalışma alanı ve aktif sprint sorumlulukları
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="relative flex items-center min-w-[260px]">
                    <span className="material-symbols-outlined absolute left-4 text-[#c7c4d7] text-[18px] pointer-events-none">search</span>
                    <input className="w-full h-10 pl-10 pr-12 rounded-xl bg-[#131b2e] text-[#dae2fd] placeholder:text-[#908fa0] text-sm focus:outline-none focus:bg-[#171f33] focus:ring-1 focus:ring-[#c0c1ff] shadow-sm transition-all" placeholder="Görevlerde ara..." type="text" />
                    <kbd className="absolute right-4 px-1.5 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs pointer-events-none">⌘F</kbd>
                  </div>
                  <button className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#8083ff] text-[#0d0096] hover:bg-[#c0c1ff] text-sm font-semibold shadow-[0_0_16px_rgba(128,131,255,0.3)] transition-all cursor-pointer" type="button">
                    <span className="material-symbols-outlined text-[20px]">add_task</span>
                    <span>+ Yeni Görev Ekle</span>
                  </button>
                </div>
              </div>

              {/* Filtre Sekme Barı */}
              <div className="flex items-center justify-between overflow-x-auto pb-1 gap-4">
                <div className="flex items-center gap-1 bg-[#060e20] p-1 rounded-xl border border-[#2d3449]/40">
                  <button className="px-4 py-1.5 rounded-lg bg-[#171f33] text-[#dae2fd] text-xs font-semibold shadow-sm transition-all" type="button">
                    Tümü <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#222a3d] text-[#c0c1ff] text-xs">12</span>
                  </button>
                  <button className="px-4 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] hover:bg-[#171f33]/50 text-xs font-medium transition-all" type="button">
                    Bugün Bitenler <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#222a3d] text-[#c7c4d7] text-xs">4</span>
                  </button>
                  <button className="px-4 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] hover:bg-[#171f33]/50 text-xs font-medium transition-all" type="button">
                    Bu Hafta <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[#222a3d] text-[#c7c4d7] text-xs">6</span>
                  </button>
                  <button className="px-4 py-1.5 rounded-lg text-rose-400 hover:bg-rose-950/30 text-xs font-medium transition-all" type="button">
                    Gecikenler <span className="ml-1 px-1.5 py-0.5 rounded-full bg-rose-950/60 text-rose-300 text-xs">2</span>
                  </button>
                </div>
              </div>

              {/* Metrik Kartları Üçlüsü */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-xl bg-[#131b2e] p-6 shadow-sm flex flex-col justify-between group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#908fa0]">GÜNLÜK HEDEF</span>
                      <span className="mt-1 text-lg font-bold text-[#dae2fd]">Bugünkü Odak</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-rose-950/40 flex items-center justify-center text-rose-400">
                      <span className="material-symbols-outlined text-[22px]">crisis_alert</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#dae2fd]">4</span>
                      <span className="text-xs text-rose-400 font-semibold">Acil Görev</span>
                    </div>
                    <span className="text-xs text-[#c7c4d7]">2 blokaj çözüldü</span>
                  </div>
                  <div className="mt-4 w-full bg-[#222a3d] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-[#8083ff] h-full rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-[#131b2e] p-6 shadow-sm flex flex-col justify-between group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#908fa0]">SPRINT HACMİ</span>
                      <span className="mt-1 text-lg font-bold text-[#dae2fd]">Sprint Tamamlanan</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#8083ff]/20 flex items-center justify-center text-[#c0c1ff]">
                      <span className="material-symbols-outlined text-[22px]">task_alt</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#dae2fd]">18</span>
                      <span className="text-xs text-[#c7c4d7]">Görev</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#222a3d] text-[#c0c1ff] text-xs font-semibold">42 SP Tamamlandı</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#c7c4d7]">
                    <span>Sprint Kotası: 56 SP</span>
                    <span className="text-[#c0c1ff] font-semibold">%75</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-[#131b2e] p-6 shadow-sm flex flex-col justify-between group hover:bg-[#171f33] transition-all border border-[#2d3449]/40">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-[#908fa0]">METRİK & TEMPO</span>
                      <span className="mt-1 text-lg font-bold text-[#dae2fd]">Haftalık Verimlilik</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#571bc1]/20 flex items-center justify-center text-[#d0bcff]">
                      <span className="material-symbols-outlined text-[22px]">speed</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#dae2fd]">%92</span>
                      <span className="text-xs text-[#c7c4d7]">Zamanında</span>
                    </div>
                    <div className="flex items-center text-[#c0c1ff] text-xs font-semibold gap-1">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      <span>+4.2%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="h-2 w-full rounded-full bg-[#8083ff]"></span>
                    <span className="h-2 w-full rounded-full bg-[#8083ff]"></span>
                    <span className="h-2 w-full rounded-full bg-[#8083ff]"></span>
                    <span className="h-2 w-full rounded-full bg-[#8083ff]"></span>
                    <span className="h-2 w-1/2 rounded-full bg-[#222a3d]"></span>
                  </div>
                </div>
              </div>

              {/* Görev Listeleri Bölümleri */}
              <div className="flex flex-col gap-8">
                
                {/* Bölüm 1: Bugün Biten & Öncelikli */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                      <h2 className="text-base font-semibold text-[#dae2fd]">Bugün Biten & Öncelikli Görevler</h2>
                      <span className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 text-xs font-semibold">2 Görev</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Görev 1 */}
                    <div className="group relative flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-[#131b2e] hover:bg-[#171f33] shadow-sm transition-all gap-4 border border-[#2d3449]/40">
                      <div className="flex items-start md:items-center gap-4 min-w-0 flex-1">
                        <input className="w-5 h-5 rounded bg-[#222a3d] accent-[#8083ff] cursor-pointer mt-0.5 md:mt-0" type="checkbox" />
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[15px] font-semibold text-[#dae2fd] hover:text-[#c0c1ff] cursor-pointer truncate transition-colors">
                              OAuth2 PKCE akışı için mobil SSO entegrasyonu
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8083ff]"></span> Auth Service v2.4
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-[#c7c4d7]">
                            <span className="flex items-center gap-1 text-rose-400 font-medium">
                              <span className="material-symbols-outlined text-[16px]">schedule</span> Bugün 17:00 (Gecikme Riski)
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">checklist</span> 3/4 Alt Görev
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6">
                        <span className="px-2.5 py-1 rounded-lg bg-rose-950/60 text-rose-300 text-xs font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">flag</span> Acil
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-semibold text-xs" title="Burcu Uysal">
                          BU
                        </div>
                      </div>
                    </div>

                    {/* Görev 2 */}
                    <div className="group relative flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-[#131b2e] hover:bg-[#171f33] shadow-sm transition-all gap-4 border border-[#2d3449]/40">
                      <div className="flex items-start md:items-center gap-4 min-w-0 flex-1">
                        <input className="w-5 h-5 rounded bg-[#222a3d] accent-[#8083ff] cursor-pointer mt-0.5 md:mt-0" type="checkbox" />
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[15px] font-semibold text-[#dae2fd] hover:text-[#c0c1ff] cursor-pointer truncate transition-colors">
                              PostgreSQL sorgu çalıştırmasını optimize et
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]"></span> Core API
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-[#c7c4d7]">
                            <span className="flex items-center gap-1 text-[#dae2fd] font-medium">
                              <span className="material-symbols-outlined text-[16px]">schedule</span> Bugün 19:00
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">checklist</span> 1/3 Alt Görev
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6">
                        <span className="px-2.5 py-1 rounded-lg bg-[#571bc1]/30 text-[#d0bcff] text-xs font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">priority_high</span> Yüksek
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-semibold text-xs" title="Burcu Uysal">
                          BU
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bölüm 2: Bu Hafta Planlananlar */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8083ff]"></span>
                      <h2 className="text-base font-semibold text-[#dae2fd]">Bu Hafta Planlananlar</h2>
                      <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs font-semibold">3 Görev</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Görev 3 */}
                    <div className="group relative flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-[#131b2e] hover:bg-[#171f33] shadow-sm transition-all gap-4 border border-[#2d3449]/40">
                      <div className="flex items-start md:items-center gap-4 min-w-0 flex-1">
                        <input defaultChecked className="w-5 h-5 rounded bg-[#222a3d] accent-[#8083ff] cursor-pointer mt-0.5 md:mt-0" type="checkbox" />
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[15px] font-semibold text-[#dae2fd] hover:text-[#c0c1ff] cursor-pointer truncate transition-colors line-through opacity-75">
                              Tasarım Sistemi için Figma bileşen belirteçlerini hazırla
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff]"></span> Design System
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-[#c7c4d7]">
                            <span>28 Eki</span>
                            <span className="text-[#c0c1ff] font-medium flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">task_alt</span> 5/5 Tamamlandı
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6">
                        <span className="px-2.5 py-1 rounded-lg bg-[#222a3d] text-[#c7c4d7] text-xs">Orta</span>
                        <div className="w-7 h-7 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-semibold text-xs" title="Burcu Uysal">
                          BU
                        </div>
                      </div>
                    </div>

                    {/* Görev 4 */}
                    <div className="group relative flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-[#131b2e] hover:bg-[#171f33] shadow-sm transition-all gap-4 border border-[#2d3449]/40">
                      <div className="flex items-start md:items-center gap-4 min-w-0 flex-1">
                        <input className="w-5 h-5 rounded bg-[#222a3d] accent-[#8083ff] cursor-pointer mt-0.5 md:mt-0" type="checkbox" />
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[15px] font-semibold text-[#dae2fd] hover:text-[#c0c1ff] cursor-pointer truncate transition-colors">
                              DevOps ekibiyle güvenlik denetimi iyileştirmelerini gözden geçir
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#908fa0]"></span> Infrastructure
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-[#c7c4d7]">
                            <span>30 Eki</span>
                            <span>2/2 Alt Görev</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6">
                        <span className="px-2.5 py-1 rounded-lg bg-[#222a3d] text-[#c7c4d7] text-xs">Orta</span>
                        <div className="w-7 h-7 rounded-full bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center font-semibold text-xs" title="Burcu Uysal">
                          BU
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Alt Bilgi Öngörü Kartı */}
              <div className="p-6 rounded-xl bg-[#131b2e] flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm border border-[#2d3449]/40 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8083ff]/20 flex items-center justify-center text-[#c0c1ff]">
                    <span className="material-symbols-outlined text-[24px]">insights</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#dae2fd] text-sm font-semibold">Sprint #42 Tamamlama Öngörüsü</span>
                    <span className="text-xs text-[#c7c4d7]">Mevcut hızınızla kalan 6 iş gününde tüm sprint taahhütleri tamamlanabilir durumdadır.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-lg bg-[#171f33] text-[#dae2fd] hover:bg-[#222a3d] text-xs font-semibold transition-all" type="button">
                    Sprint Detayları
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[#8083ff] text-[#0d0096] hover:bg-[#c0c1ff] text-xs font-semibold transition-all" type="button">
                    Raporu İncele
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