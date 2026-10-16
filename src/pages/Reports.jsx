import React from 'react';

export default function Reports() {
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
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[#c7c4d7] hover:bg-[#171f33] hover:text-[#dae2fd] transition-all text-sm" href="/sprints">
              <span className="material-symbols-outlined text-[20px]">dynamic_feed</span>
              <span>Sprintler</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-2.5 rounded-lg bg-[#171f33] text-[#dae2fd] font-medium text-sm border-l-4 border-[#8083ff] transition-all" href="/reports">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bar_chart</span>
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
            
            {/* Arka Plan Glow */}
            <div className="relative w-full">
              <div className="absolute -top-16 left-1/3 w-96 h-96 bg-[#8083ff]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
              <div className="absolute top-48 right-10 w-80 h-80 bg-[#571bc1]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

              {/* Breadcrumb ve Senkronizasyon Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-[#908fa0] text-xs uppercase tracking-wider font-semibold">
                  <span>ÇALIŞMA ALANI</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-[#c0c1ff]">PERFORMANS & ANALİTİK</span>
                </div>
                <div className="flex items-center gap-2 bg-[#131b2e] px-3 py-1 rounded-full shadow-sm border border-[#2d3449]/40 text-xs text-[#c7c4d7]">
                  <span className="w-2 h-2 rounded-full bg-[#8083ff] animate-pulse"></span>
                  Son Senkronizasyon: <strong className="text-[#dae2fd]">Bugün, 14:32</strong>
                </div>
              </div>

              {/* Başlık ve Butonlar */}
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
                <div className="space-y-1 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#222a3d] text-[#8083ff] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px]">monitoring</span>
                    Agile Metrik Motoru v3.1
                  </div>
                  <h1 className="text-3xl font-bold text-[#dae2fd] tracking-tight">
                    Raporlar & Sprint Analitiği
                  </h1>
                  <p className="text-sm text-[#c7c4d7] leading-relaxed">
                    Sprint tamamlama hızları, Burndown eğrileri, ekip verimliliği ve döngü süresi analizleri ile veri güdümlü karar alma paneli.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button className="flex items-center gap-2 h-10 px-4 rounded-xl bg-[#131b2e] text-[#dae2fd] hover:bg-[#171f33] transition-all shadow-sm text-xs font-medium border border-[#2d3449]/40" type="button">
                    <span className="material-symbols-outlined text-[18px] text-[#8083ff]">calendar_month</span>
                    <span>Son 4 Sprint (Sprint 11 - 14)</span>
                    <span className="material-symbols-outlined text-[18px] text-[#908fa0]">expand_more</span>
                  </button>
                  <button className="flex items-center gap-2 h-10 px-5 rounded-xl bg-gradient-to-r from-[#8083ff] via-[#571bc1] to-[#8083ff] text-[#0d0096] font-semibold shadow-lg transition-all hover:scale-[1.02]" type="button">
                    <span className="material-symbols-outlined text-[20px]">add_chart</span>
                    <span>+ Özel Rapor Oluştur</span>
                  </button>
                </div>
              </div>

              {/* AI Akıllı Öngörüler Banner */}
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#131b2e] via-[#171f33] to-[#131b2e] p-6 mb-8 shadow-xl border border-[#2d3449]/40">
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-[#8083ff]/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-start gap-4 max-w-4xl">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#8083ff] to-[#571bc1] flex items-center justify-center text-[#0d0096] shadow-md">
                      <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#8083ff] font-bold uppercase tracking-wider">SprintEra Akıllı Öngörü & Tahminleme</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#8083ff]/10 text-[#8083ff] text-[11px] font-semibold">Makine Öğrenimi</span>
                      </div>
                      <p className="text-sm text-[#dae2fd] leading-snug">
                        Mevcut döngü hızıyla <strong>Q4 hedefleriniz 8 gün erken</strong> tamamlanabilir. Ancak <em>Auth Servisi</em> kod inceleme (PR) süreleri son 3 günde <strong>%15 uzadı</strong>; inceleme kapasitesini dengelemeniz önerilir.
                      </p>
                    </div>
                  </div>
                  <button className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8083ff] hover:bg-[#c0c1ff] text-[#0d0096] text-xs font-semibold shadow-md transition-all" type="button">
                    <span>İnceleme Dağılımını Optimize Et</span>
                    <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                  </button>
                </div>
              </section>

              {/* 4'lü Analitik Özet Kartları */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                
                <div className="group relative rounded-2xl bg-[#131b2e] hover:bg-[#171f33] p-6 transition-all shadow-md flex flex-col justify-between border border-[#2d3449]/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">Ortalama Takım Hızı</span>
                    <div className="w-9 h-9 rounded-xl bg-[#171f33] flex items-center justify-center text-[#8083ff]">
                      <span className="material-symbols-outlined text-[20px]">speed</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#dae2fd]">52</span>
                      <span className="text-sm font-medium text-[#8083ff]">SP</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#8083ff] font-medium">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      <span>+%8.4 artış trendi</span>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-[#222a3d] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8083ff] to-[#c0c1ff] rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-[#131b2e] hover:bg-[#171f33] p-6 transition-all shadow-md flex flex-col justify-between border border-[#2d3449]/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">Tamamlama Oranı</span>
                    <div className="w-9 h-9 rounded-xl bg-[#171f33] flex items-center justify-center text-[#d0bcff]">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#dae2fd]">%94.2</span>
                    </div>
                    <p className="text-xs text-[#c7c4d7]">Taahhüt edilen işlerin zamanında teslimi</p>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-[#222a3d] rounded-full overflow-hidden">
                    <div className="h-full bg-[#d0bcff] rounded-full" style={{ width: '94.2%' }}></div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-[#131b2e] hover:bg-[#171f33] p-6 transition-all shadow-md flex flex-col justify-between border border-[#2d3449]/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">Ort. Döngü Süresi</span>
                    <div className="w-9 h-9 rounded-xl bg-[#171f33] flex items-center justify-center text-[#c3c0ff]">
                      <span className="material-symbols-outlined text-[20px]">timelapse</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#dae2fd]">3.2</span>
                      <span className="text-sm font-medium text-[#908fa0]">Gün</span>
                    </div>
                    <p className="text-xs text-[#c7c4d7]">Geliştirmede ortalama geçiş süresi</p>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-[#222a3d] rounded-full overflow-hidden">
                    <div className="h-full bg-[#c3c0ff] rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-[#131b2e] hover:bg-[#171f33] p-6 transition-all shadow-md flex flex-col justify-between border border-[#2d3449]/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#908fa0] font-semibold">Hata / Regresyon</span>
                    <div className="w-9 h-9 rounded-xl bg-[#171f33] flex items-center justify-center text-emerald-400">
                      <span className="material-symbols-outlined text-[20px]">pest_control</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#dae2fd]">%1.8</span>
                    </div>
                    <p className="text-xs text-emerald-400 font-medium">Sektör ortalamasının altında</p>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-[#222a3d] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>

              </section>

              {/* Grafikler Alanı (Burndown & Velocity) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                
                {/* Sprint Burndown Grafiği */}
                <div className="lg:col-span-7 rounded-2xl bg-[#131b2e] p-6 shadow-lg flex flex-col justify-between border border-[#2d3449]/40">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-bold text-[#dae2fd]">Sprint Burndown Grafiği</h2>
                          <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#8083ff] text-xs font-semibold">Sprint #14</span>
                        </div>
                        <p className="text-xs text-[#c7c4d7]">Taahhüt edilen hikaye puanlarının zaman içerisindeki düşüş eğrisi</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#171f33] mb-4 text-xs">
                      <div className="flex items-center gap-2 text-[#dae2fd]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8083ff]"></span>
                        <span><strong>Trend:</strong> Zamanında bitmesi öngörülüyor (Tahmini sapma: 0 gün)</span>
                      </div>
                      <span className="text-[#8083ff] font-semibold">Gün 9 / 14</span>
                    </div>

                    {/* SVG Burndown Çizimi */}
                    <div className="relative w-full h-64 select-none">
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 220">
                        <defs>
                          <linearGradient id="actualGlow" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8083ff" stopOpacity="0.35"></stop>
                            <stop offset="100%" stopColor="#8083ff" stopOpacity="0.0"></stop>
                          </linearGradient>
                          <linearGradient id="lineStroke" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#c0c1ff"></stop>
                            <stop offset="100%" stopColor="#8083ff"></stop>
                          </linearGradient>
                        </defs>
                        <line stroke="#222a3d" strokeWidth="1" x1="40" x2="520" y1="20" y2="20"></line>
                        <line stroke="#222a3d" strokeWidth="1" x1="40" x2="520" y1="110" y2="110"></line>
                        <line stroke="#222a3d" strokeWidth="1" x1="40" x2="520" y1="200" y2="200"></line>
                        <text fill="#908fa0" fontSize="10" textAnchor="end" x="30" y="24">100</text>
                        <text fill="#908fa0" fontSize="10" textAnchor="end" x="30" y="114">50</text>
                        <text fill="#908fa0" fontSize="10" textAnchor="end" x="30" y="204">0</text>
                        <line opacity="0.6" stroke="#908fa0" strokeDasharray="4 4" strokeWidth="1.5" x1="40" x2="520" y1="20" y2="200"></line>
                        <polygon fill="url(#actualGlow)" points="40,20 80,32 120,40 160,58 200,75 240,92 280,105 320,122 360,142 360,200 40,200"></polygon>
                        <path d="M 40,20 L 80,32 L 120,40 L 160,58 L 200,75 L 240,92 L 280,105 L 320,122 L 360,142" fill="none" stroke="url(#lineStroke)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                        <circle cx="360" cy="142" fill="#c0c1ff" r="5" stroke="#0b1326" strokeWidth="2"></circle>
                        <line opacity="0.8" stroke="#8083ff" strokeDasharray="3 3" strokeWidth="2" x1="360" x2="520" y1="142" y2="200"></line>
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#2d3449]/40 mt-4 text-xs">
                    <div className="text-center p-2 rounded-xl bg-[#171f33]"><span className="text-[#908fa0] block">Kalan Puan</span><strong className="text-[#8083ff] text-sm">32 SP</strong></div>
                    <div className="text-center p-2 rounded-xl bg-[#171f33]"><span className="text-[#908fa0] block">Taahhüt</span><strong className="text-[#dae2fd] text-sm">100 SP</strong></div>
                    <div className="text-center p-2 rounded-xl bg-[#171f33]"><span className="text-[#908fa0] block">Kalan Süre</span><strong className="text-[#d0bcff] text-sm">5 Gün</strong></div>
                  </div>
                </div>

                {/* Sprint Hız Karşılaştırması */}
                <div className="lg:col-span-5 rounded-2xl bg-[#131b2e] p-6 shadow-lg flex flex-col justify-between border border-[#2d3449]/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-base font-bold text-[#dae2fd]">Sprint Hız Karşılaştırması</h2>
                        <p className="text-xs text-[#c7c4d7]">Planlanan vs Gerçekleşen Story Point</p>
                      </div>
                      <span className="text-sm font-bold text-[#8083ff]">_ %96</span>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs"><span className="text-[#dae2fd]">Sprint 11</span><span className="text-[#c7c4d7]">44 / 48 SP</span></div>
                        <div className="h-5 w-full bg-[#171f33] rounded-lg p-0.5 flex gap-1 items-center">
                          <div className="h-full bg-[#222a3d] rounded" style={{ width: '80%' }}></div>
                          <div className="h-full bg-[#8083ff]/40 rounded" style={{ width: '73%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs"><span className="text-[#dae2fd]">Sprint 12</span><span className="text-[#c7c4d7]">49 / 50 SP</span></div>
                        <div className="h-5 w-full bg-[#171f33] rounded-lg p-0.5 flex gap-1 items-center">
                          <div className="h-full bg-[#222a3d] rounded" style={{ width: '83%' }}></div>
                          <div className="h-full bg-[#8083ff]/40 rounded" style={{ width: '81%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs"><span className="text-[#dae2fd]">Sprint 13</span><span className="text-[#c7c4d7]">53 / 54 SP</span></div>
                        <div className="h-5 w-full bg-[#171f33] rounded-lg p-0.5 flex gap-1 items-center">
                          <div className="h-full bg-[#222a3d] rounded" style={{ width: '90%' }}></div>
                          <div className="h-full bg-[#8083ff]/40 rounded" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs"><span className="text-[#8083ff] font-semibold">Sprint 14 (Mevcut)</span><span className="text-[#d0bcff]">68 / 100 SP</span></div>
                        <div className="h-5 w-full bg-[#171f33] rounded-lg p-0.5 flex gap-1 items-center">
                          <div className="h-full bg-[#222a3d] rounded" style={{ width: '100%' }}></div>
                          <div className="h-full bg-gradient-to-r from-[#8083ff] to-[#d0bcff] rounded" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-[#171f33] flex items-center gap-2 text-xs text-[#c7c4d7]">
                    <span className="material-symbols-outlined text-[#8083ff] text-[18px]">thumb_up</span>
                    <span>Takım son 3 sprintte ortalama <strong>52 SP</strong> kapasiteyi %95+ doğrulukla teslim ediyor.</span>
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