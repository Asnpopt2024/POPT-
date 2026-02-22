
import React from 'react';
import { PEST_DATA } from '../constants';

const OptInformation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-800">Katalog Organisme Pengganggu Tumbuhan</h3>
        <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-500">
          Total: {PEST_DATA.length} Hama/Penyakit
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PEST_DATA.map((pest) => (
          <div key={pest.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={pest.imageUrl} 
                alt={pest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                  {pest.host}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h4 className="text-lg font-bold text-slate-800 mb-2">{pest.name}</h4>
              
              <div className="space-y-3 mt-2 flex-1">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gejala Utama</p>
                  <p className="text-sm text-slate-600 mt-1">{pest.symptoms}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metode Pengendalian</p>
                  <p className="text-sm text-slate-600 mt-1">{pest.control}</p>
                </div>
              </div>

              <button className="mt-6 w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center">
                Lihat Detail Teknis
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptInformation;
