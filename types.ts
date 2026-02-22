
export enum Tab {
  BERANDA = 'beranda',
  OPT = 'opt',
  PENGAMATAN = 'pengamatan',
  PENYULUHAN = 'penyuluhan',
  ARSIP = 'arsip',
  KONSULTASI = 'konsultasi',
  CUACA = 'cuaca',
  MANAJEMEN_USER = 'user_management'
}

export type UserRole = 'Admin' | 'Petugas POPT' | 'Penyuluh' | 'Kepala BPP';

export interface User {
  id: string;
  username: string;
  password: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
}

export interface Observation {
  id: string;
  date: string;
  village: string;
  cropType: string;
  optName: string;
  method: 'Tetap' | 'Keliling';
  intensity: number;
  category: 'Ringan' | 'Sedang' | 'Berat' | 'Puso';
  hst?: number;
  landCondition?: string;
  phtRecommendation?: string;
  pesticideRecommendation?: string;
  details: any; // Method-specific calculation data
}

export interface PestInfo {
  id: string;
  name: string;
  host: string;
  symptoms: string;
  control: string;
  imageUrl: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  url?: string;
}
