import React from 'react';

export default function Projects() {
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/projects">
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
          <div className="flex flex-col w-full">
            <div className="relative w-full pb-10">
              <div className="absolute -top-10 left-1/4 w-96 h-96 bg-[#8083ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute top-24 right-1/6 w-80 h-80 bg-[#571bc1]/15 rounded-full blur-[100px] pointer-events-none"></div>
              
              {/* Başlık ve Butonlar */}
              <div className="relative z-10 flex flex-col gap-6 mb-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-[#908fa0] text-xs font-semibold">
                      <span>ÇALIŞMA ALANI</span>
                      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                      <span className="text-[#c0c1ff] font-medium">PORTFÖY YÖNETİMİ</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-[#dae2fd]">Projeler Portföyü</h1>
                    <p className="text-sm text-[#c7c4d7] max-w-2xl">
                      Aktif çalışma alanındaki tüm mühendislik, tasarım ve altyapı projeleri, sprint ilerlemeleri ve SLA metrikleri.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-start lg:self-auto">
                    <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#171f33] text-[#dae2fd] hover:bg-[#222a3d] transition-all text-sm font-medium shadow-sm" type="button">
                      <span className="material-symbols-outlined text-[18px]">file_download</span>
                      <span>Rapor Dışa Aktar</span>
                    </button>
                    <button className="inline-flex items-center gap-2 h-10 px-6 rounded-xl bg-gradient-to-r from-[#8083ff] via-[#8083ff] to-[#571bc1] text-[#0d0096] hover:brightness-110 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(128,131,255,0.35)] active:scale-95" type="button">
                      <span className="material-symbols-outlined text-[20px]">add_circle</span>
                      <span>Yeni Proje Oluştur</span>
                    </button>
                  </div>
                </div>

                {/* 4'lü Üst İstatistik Kartları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-6 rounded-2xl bg-[#131b2e]/80 backdrop-blur-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-[#131b2e] transition-all border border-[#2d3449]/40">
                    <div className="flex items-start justify-between">
                      <span className="text-xs tracking-wider uppercase text-[#908fa0]">Toplam Proje</span>
                      <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#c0c1ff]">
                        <span className="material-symbols-outlined text-[18px]">folder_copy</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#dae2fd]">12</span>
                        <span className="text-sm text-[#c7c4d7] font-medium">Aktif Proje</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#c0c1ff] text-xs font-semibold">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>%92 zamanında teslim</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#131b2e]/80 backdrop-blur-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-[#131b2e] transition-all border border-[#2d3449]/40">
                    <div className="flex items-start justify-between">
                      <span className="text-xs tracking-wider uppercase text-[#908fa0]">Aktif Sprintler</span>
                      <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#d0bcff]">
                        <span className="material-symbols-outlined text-[18px]">dynamic_feed</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#dae2fd]">8</span>
                        <span className="text-sm text-[#c7c4d7] font-medium">Devam Eden Sprint</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#c7c4d7] text-xs">
                        <span className="material-symbols-outlined text-[16px]">group</span>
                        <span>34 aktif mühendis & tasarımcı</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#131b2e]/80 backdrop-blur-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-[#131b2e] transition-all border border-[#2d3449]/40">
                    <div className="flex items-start justify-between">
                      <span className="text-xs tracking-wider uppercase text-[#908fa0]">Risk Durumu</span>
                      <div className="w-8 h-8 rounded-lg bg-rose-950/40 flex items-center justify-center text-rose-400">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-rose-400">1</span>
                        <span className="text-sm text-[#c7c4d7] font-medium">Proje İncelemede</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold">
                        <span className="material-symbols-outlined text-[16px]">priority_high</span>
                        <span>Auth Service SLA riski</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#131b2e]/80 backdrop-blur-md shadow-md flex flex-col justify-between relative overflow-hidden group hover:bg-[#131b2e] transition-all border border-[#2d3449]/40">
                    <div className="flex items-start justify-between">
                      <span className="text-xs tracking-wider uppercase text-[#908fa0]">Sprint Hızı</span>
                      <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#c3c0ff]">
                        <span className="material-symbols-outlined text-[18px]">speed</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#dae2fd]">%94.8</span>
                        <span className="text-sm text-[#c7c4d7] font-medium">Hız Ortalaması</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#c0c1ff] text-xs font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <span>Son 4 sprint istikrarlı</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filtre ve Arama Çubuğu */}
                <div className="p-4 rounded-2xl bg-[#131b2e]/90 backdrop-blur-xl shadow-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border border-[#2d3449]/40">
                  <div className="relative flex-1 max-w-lg">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#908fa0] text-[20px]">search</span>
                    <input className="w-full h-11 pl-11 pr-20 bg-[#171f33] rounded-xl text-[#dae2fd] placeholder:text-[#908fa0] text-sm focus:outline-none focus:ring-1 focus:ring-[#c0c1ff] transition-all" placeholder="Projelerde, etiketlerde veya liderlerde ara..." type="text" />
                    <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-[#222a3d] text-[#c7c4d7] text-xs">⌘K</kbd>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center bg-[#171f33] p-1 rounded-xl">
                      <button className="px-4 py-1.5 rounded-lg bg-[#8083ff] text-[#0d0096] text-xs font-semibold shadow-sm transition-all" type="button">Tümü</button>
                      <button className="px-4 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] text-xs font-medium transition-all" type="button">Aktif</button>
                      <button className="px-4 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] text-xs font-medium transition-all" type="button">Riskli</button>
                      <button className="px-4 py-1.5 rounded-lg text-[#c7c4d7] hover:text-[#dae2fd] text-xs font-medium transition-all" type="button">Tamamlanan</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proje Kartları Grid Listesi */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                
                {/* Proje 1 */}
                <div className="group relative rounded-2xl bg-[#131b2e]/90 backdrop-blur-xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all border border-[#2d3449]/40">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#8083ff]/20 flex items-center justify-center text-[#c0c1ff]">
                          <span className="material-symbols-outlined text-[26px]">api</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#222a3d] text-[#c0c1ff] text-xs">Mühendislik</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2d3449] text-[#c7c4d7] text-xs">Sprint 14</span>
                          </div>
                          <h3 className="text-base text-[#dae2fd] font-semibold mt-1 group-hover:text-[#c0c1ff] transition-colors">Core API & GraphQL Gateway</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#c7c4d7] line-clamp-2">
                      Mikroservisler arası federated GraphQL altyapısı, Apollo Router entegrasyonu ve schema registry senkronizasyonu.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#222a3d] text-xs text-[#c0c1ff] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff] animate-ping"></span> Yolunda
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#171f33] text-xs text-[#c7c4d7]">
                        4 gün kaldı
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#c7c4d7]">Tamamlanma Oranı</span>
                        <span className="text-[#dae2fd] font-semibold">%78</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#171f33] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#8083ff] to-[#c0c1ff] rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#2d3449]/40">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#c0c1ff] text-[#0d0096] text-xs flex items-center justify-center font-bold">EK</div>
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#d0bcff] text-[#23005c] text-xs flex items-center justify-center font-bold">BT</div>
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#c3c0ff] text-[#0f0069] text-xs flex items-center justify-center font-bold">SA</div>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[#c0c1ff] hover:underline text-xs font-semibold" type="button">
                      <span>Pano Aç</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Proje 2 */}
                <div className="group relative rounded-2xl bg-[#131b2e]/90 backdrop-blur-xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all border border-[#2d3449]/40">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#571bc1]/20 flex items-center justify-center text-[#d0bcff]">
                          <span className="material-symbols-outlined text-[26px]">palette</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#222a3d] text-[#d0bcff] text-xs">Tasarım Sistemi</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2d3449] text-[#c7c4d7] text-xs">Sprint 3</span>
                          </div>
                          <h3 className="text-base text-[#dae2fd] font-semibold mt-1 group-hover:text-[#d0bcff] transition-colors">Design System v2.4</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#c7c4d7] line-clamp-2">
                      Tailwind 4 entegrasyonu, token senkronizasyonu, erişilebilirlik ve karanlık mod optimizasyonu.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#222a3d] text-xs text-[#d0bcff] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]"></span> Yolunda
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#171f33] text-xs text-[#c7c4d7]">
                        8 gün kaldı
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#c7c4d7]">Tamamlanma Oranı</span>
                        <span className="text-[#dae2fd] font-semibold">%65</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#171f33] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#571bc1] to-[#d0bcff] rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#2d3449]/40">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#d0bcff] text-[#23005c] text-xs flex items-center justify-center font-bold">DZ</div>
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#c0c1ff] text-[#0d0096] text-xs flex items-center justify-center font-bold">YA</div>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[#d0bcff] hover:underline text-xs font-semibold" type="button">
                      <span>Pano Aç</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Proje 3 (Riskli) */}
                <div className="group relative rounded-2xl bg-[#131b2e]/90 backdrop-blur-xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all ring-1 ring-rose-500/30 border border-[#2d3449]/40">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-rose-950/40 flex items-center justify-center text-rose-400">
                          <span className="material-symbols-outlined text-[26px]">shield</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-300 text-xs">Güvenlik</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2d3449] text-[#c7c4d7] text-xs">Sprint 14</span>
                          </div>
                          <h3 className="text-base text-[#dae2fd] font-semibold mt-1 group-hover:text-rose-400 transition-colors">Auth & SSO Integration</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#c7c4d7] line-clamp-2">
                      Okta, Azure AD ve Google Workspace SSO desteği. Refresh token rotasyonu ve session revocation.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-950/60 text-xs text-rose-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span> Riskli - Gecikme Olası
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#c7c4d7]">Tamamlanma Oranı</span>
                        <span className="text-rose-400 font-semibold">%42</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#171f33] overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#2d3449]/40">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-rose-500 text-white text-xs flex items-center justify-center font-bold">MK</div>
                      <div className="w-8 h-8 rounded-full ring-2 ring-[#131b2e] bg-[#c0c1ff] text-[#0d0096] text-xs flex items-center justify-center font-bold">CN</div>
                    </div>
                    <button className="inline-flex items-center gap-1 text-rose-400 hover:underline text-xs font-semibold" type="button">
                      <span>Risk Analizi</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
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