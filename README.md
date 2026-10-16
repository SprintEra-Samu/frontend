# SprintEra Frontend Web Uygulaması 🎨

[![Frontend CI](https://github.com/SprintEra-Samu/frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/SprintEra-Samu/frontend/actions/workflows/ci.yml)

SprintEra Proje Yönetim Sistemi'nin modern, dinamik ve kullanıcı dostu web ön yüz (frontend) uygulaması. Bu katman; ekip üyeleri ve yöneticilerin projelerini, görev durumlarını (Kanban/Sprint), kullanıcı rollerini ve ilerleme raporlarını gerçek zamanlı olarak takip etmelerini sağlar.

---

## 🛠️ Kullanılan / Planlanan Teknolojiler

- **React.js & Vite** - Hızlı ve modern web uygulaması geliştirme ortamı
- **Tailwind CSS & Vanilla CSS** - Esnek, responsive ve modern UI bileşenleri
- **Axios / Fetch API** - SprintEra Backend REST API haberleşmesi
- **React Router** - Sayfa yönlendirme ve dinamik route yönetimi
- **Lucide Icons** - Modern ve tutarlı ikon seti
- **GitHub Actions** - Otomatik derleme (build) ve CI kalite kontrolü

---

## 📂 Planlanan Proje Klasör Yapısı

```text
frontend/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions otomatik CI derleme/test pipeline
├── public/                    # Statik dosyalar ve favicon
├── src/
│   ├── assets/                # Resimler, logolar ve global stiller
│   ├── components/            # Tekrar kullanılabilir UI bileşenleri (Button, Modal, Card vb.)
│   ├── contexts/              # Global state yönetimi (AuthContext, ThemeContext vb.)
│   ├── pages/                 # Sayfa görünümleri (Login, Dashboard, Projects, Tasks vb.)
│   ├── services/              # API servis katmanı (Backend REST API istekleri)
│   ├── App.jsx                # Ana uygulama ve route tanımlamaları
│   └── main.jsx               # React DOM giriş noktası
├── .env.example               # Örnek ortam değişkenleri şablonu
├── .gitignore                 # Git tarafından yok sayılacak dosyalar
├── package.json               # Bağımlılıklar ve npm scriptleri
└── README.md                  # Proje ve kurulum dokümantasyonu
```

---

## ⚙️ Gereksinimler

- [Node.js](https://nodejs.org/) (v18.x veya v20.x+)
- [npm](https://www.npmjs.com/) (v9+)
- Çalışan bir [SprintEra Backend API](https://github.com/SprintEra-Samu/backend) servisi (`http://localhost:3000`)

---

## 🚀 Kurulum ve Çalıştırma Adımları

**1. Bağımlılıkları Yükleyin**
```bash
npm install
```

**2. Ortam Değişkenlerini (.env) Ayarlayın**
Proje dizinindeki `.env.example` dosyasını `.env` olarak kopyalayın ve backend API adresini doğrulayın:
```bash
# Windows PowerShell:
Copy-Item .env.example .env

# Linux / macOS:
cp .env.example .env
```

`.env` dosya içeriği örneği:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

**3. Geliştirme Sunucusunu Başlatın**
```bash
npm run dev
```
Uygulama varsayılan olarak `http://localhost:5173` adresinde açılacaktır.

**4. Production (Canlı) Derlemesi Alma**
```bash
npm run build
npm run preview
```

---

## 🌿 Git Branch Stratejisi & PR Kuralları

SprintEra repositories genelinde kararlı ve güvenli geliştirme akışı için **Ruleset** koruması aktiftir:

1. **`main` Branch (Canlı / Production):** 
   - Doğrudan `git push` kesinlikle engellenmiştir.
   - Sadece testleri geçen ve ekip onayı alan PR'lar üzerinden merge edilebilir.
2. **`dev` Branch (Ortak Geliştirme):** 
   - Tüm yeni özelliklerin birleştiği ana geliştirme dalıdır. Doğrudan push yasaktır.
3. **Yeni Bir Göreve Başlarken (Feature Branch):**
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/gorev-adi
   ```
4. **İşi Tamamlama ve PR Açma:**
   - Değişikliklerinizi commit edip branch'inizi push'layın:
     ```bash
     git push -u origin feature/gorev-adi
     ```
   - GitHub üzerinden `dev` dalına **Pull Request** açın.
   - GitHub Actions CI kontrolünün yeşil yandığından ve en az 1 ekip arkadaşınızın inceleme onayından (Review Approval) geçtiğinden emin olun.
