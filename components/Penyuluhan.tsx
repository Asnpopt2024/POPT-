
import React from 'react';

const Penyuluhan: React.FC = () => {
  const materials = [
    { title: 'Pengendalian OPT Ramah Lingkungan', type: 'Modul', date: '12 Jan 2026', author: 'Dr. Ir. Suharyanto' },
    { title: 'Budidaya Cabai Sehat Tanpa Pestisida', type: 'Video', date: '05 Jan 2026', author: 'Tim POPT Jabar' },
    { title: 'Teknik Sanitasi Lahan Musim Hujan', type: 'Infografis', date: '28 Des 2025', author: 'Kementan RI' },
    { title: 'Manajemen Musuh Alami di Sawah', type: 'Modul', date: '15 Des 2025', author: 'Balai Proteksi Tanaman' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-2xl text-white shadow-lg">
        <h3 className="text-2xl font-bold">Materi Penyuluhan Pertanian</h3>
        <p className="text-green-100 mt-2 opacity-90 max-w-xl">
          Akses modul, video tutorial, dan panduan praktis untuk meningkatkan kualitas budidaya dan pengendalian hama secara berkelanjutan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {materials.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between hover:border-green-300 transition-colors cursor-pointer group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                {item.type === 'Modul' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {item.type === 'Video' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {item.type === 'Infografis' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">{item.title}</h4>
                <div className="flex items-center space-x-3 mt-1 text-xs text-slate-500">
                  <span>{item.author}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mr-4">{item.type}</span>
              <button className="text-green-600 font-bold text-sm hover:underline">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Penyuluhan;
