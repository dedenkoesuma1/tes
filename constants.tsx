
import React from 'react';
import { 
  Map, 
  Search, 
  TrendingUp, 
  Construction, 
  Settings, 
  Layers, 
  Target,
  FlaskConical,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem, CompanyData } from './types';

export const COMPANY_INFO: CompanyData = {
  name: "PT Terra Aditama Marcapada",
  description: "Dalam era pembangunan yang ditandai dengan perubahan cepat dan kompleks, tidak ada ruang untuk kesalahan dalam berpikir maupun bertindak. PT. Terra Aditama Marcapada hadir sebagai solusi profesional yang didukung oleh teknologi canggih dan inovasi berkelanjutan. Perusahaan ini berkomitmen menjadi mitra strategis dalam melaksanakan proyek konsultansi teknik terintegrasi, dengan prinsip kecepatan, ketepatan, dan keandalan untuk memenuhi kebutuhan sektor pemerintah maupun swasta.",
  principles: ["Kecepatan", "Ketepatan", "Keandalan"],
  expertise: [
    "Survey dan Pemetaan",
    "Perencanaan Umum",
    "Studi Kelayakan",
    "Pengembangan Wilayah dan Perkotaan",
    "Perancangan Teknik",
    "Pengawasan Teknik",
    "Penelitian dan Pengembangan"
  ]
};

export const DETAILED_EXPERTISE = [
  { title: "Survey dan Pemetaan", icon: <Map className="w-6 h-6" /> },
  { title: "Perencanaan Umum", icon: <Search className="w-6 h-6" /> },
  { title: "Studi Kelayakan", icon: <TrendingUp className="w-6 h-6" /> },
  { title: "Pengembangan Wilayah", icon: <Layers className="w-6 h-6" /> },
  { title: "Perancangan Teknik", icon: <Settings className="w-6 h-6" /> },
  { title: "Pengawasan Teknik", icon: <Construction className="w-6 h-6" /> },
  { title: "Litbang", icon: <FlaskConical className="w-6 h-6" /> },
];

export const CORE_VALUES = [
  { 
    title: 'Kecepatan', 
    desc: 'Respon cepat dan penyelesaian proyek tepat waktu.',
    icon: <Zap className="w-10 h-10 text-yellow-500" />
  },
  { 
    title: 'Ketepatan', 
    desc: 'Akurasi teknis tinggi dengan standar internasional.',
    icon: <CheckCircle2 className="w-10 h-10 text-green-500" />
  },
  { 
    title: 'Keandalan', 
    desc: 'Mitra terpercaya dengan integritas profesional.',
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'survey',
    title: 'Survey & Pemetaan',
    description: 'Pengumpulan data geospasial presisi menggunakan teknologi pemetaan terkini untuk dasar perencanaan yang akurat.',
    icon: <Map className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'planning',
    title: 'Perencanaan Umum',
    description: 'Penyusunan rencana induk strategis yang komprehensif untuk mendukung keberlanjutan proyek infrastruktur.',
    icon: <Search className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'feasibility',
    title: 'Studi Kelayakan',
    description: 'Analisis mendalam aspek teknis, ekonomi, dan lingkungan untuk memastikan investasi proyek yang tepat guna.',
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'urban',
    title: 'Pengembangan Wilayah',
    description: 'Solusi inovatif bagi tata ruang perkotaan dan wilayah yang harmonis dan berkelanjutan di era modern.',
    icon: <Layers className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'design',
    title: 'Perancangan Teknik',
    description: 'Detail Engineering Design (DED) yang mengedepankan efisiensi struktur dan ketepatan fungsi.',
    icon: <Settings className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'supervision',
    title: 'Pengawasan Teknik',
    description: 'Monitoring proyek secara profesional untuk menjamin kualitas hasil sesuai spesifikasi teknis.',
    icon: <Construction className="w-8 h-8 text-blue-600" />
  }
];
