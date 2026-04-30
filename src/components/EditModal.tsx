import React, { useState } from "react";
import { X, Save, Plus, Trash2, Edit3 } from "lucide-react";

interface EditModalProps {
  title: string;
  fields: { key: string; label: string; value: string; multiline?: boolean }[];
  onSave: (data: Record<string, string>) => void;
  onClose: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({ title, fields, onSave, onClose }) => {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(f => [f.key, f.value]))
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 border-2 border-cyan-500 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-[0_0_30px_rgba(0,243,255,0.2)] z-10">
        <div className="bg-cyan-500 text-black px-4 py-2 font-bold flex justify-between items-center sticky top-0" style={{fontFamily:"'Orbitron',sans-serif"}}>
          <span>{title}</span>
          <button onClick={onClose}><X size={18}/></button>
        </div>
        <div className="p-6 space-y-4">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{f.label}</label>
              {f.multiline ? (
                <textarea
                  value={values[f.key] || ""}
                  onChange={e => setValues({...values, [f.key]: e.target.value})}
                  rows={8}
                  className="w-full bg-slate-950 border border-slate-700 text-white text-sm p-3 focus:outline-none focus:border-cyan-400 resize-y font-mono"
                />
              ) : (
                <input
                  value={values[f.key] || ""}
                  onChange={e => setValues({...values, [f.key]: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 text-white text-sm px-3 py-2 focus:outline-none focus:border-cyan-400 font-mono"
                />
              )}
            </div>
          ))}
          <button onClick={() => onSave(values)}
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 text-sm transition-all"
            style={{fontFamily:"'Orbitron',sans-serif"}}>
            <Save size={14}/> SAVE_CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export const EditBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="flex items-center gap-1 text-[10px] bg-slate-800 hover:bg-purple-500 hover:text-black text-purple-400 px-2 py-1 transition-all">
    <Edit3 size={10}/> EDIT
  </button>
);

export const AddBtn: React.FC<{ onClick: () => void; label?: string }> = ({ onClick, label = "ADD_NEW" }) => (
  <button onClick={onClick}
    className="w-full flex items-center justify-center gap-2 text-xs border-2 border-dashed border-slate-700 hover:border-cyan-500 text-slate-500 hover:text-cyan-400 py-4 transition-all mt-4">
    <Plus size={14}/> {label}
  </button>
);

export const DeleteBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="flex items-center gap-1 text-[10px] bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-2 py-1 transition-all">
    <Trash2 size={10}/> DEL
  </button>
);
