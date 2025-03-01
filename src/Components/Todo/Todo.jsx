import { useState, useEffect } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditting, setIsEditting] = useState(false);
    const [editText, setEditText] = useState(todoData);

    useEffect(() => setFinished(isFinished), [isFinished]);
    useEffect(() => setEditText(todoData), [todoData]);

    return (
        <div className={`relative mb-4 transition-transform duration-300 hover:scale-[1.005] ${finished ? 'opacity-60' : ''}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-20 transition-opacity duration-500"></div>

            <div className="relative flex items-center gap-4 p-4 sm:p-6 bg-slate-900 bg-opacity-80 backdrop-blur-lg shadow-lg rounded-2xl border border-cyan-500/20">
                <div className="relative shrink-0">
                    <input 
                        type="checkbox"
                        checked={finished}
                        onChange={(e) => {
                            const newValue = e.target.checked;
                            setFinished(newValue);
                            changeFinished(newValue);
                        }}
                        className="appearance-none w-8 h-8 sm:w-7 sm:h-7 rounded-lg border-2 border-slate-500 
                        checked:border-cyan-400 checked:bg-cyan-400/20 cursor-pointer transition-all duration-300"
                    />
                    <svg 
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-5 sm:h-5 
                        text-cyan-400 pointer-events-none opacity-0 ${finished ? 'opacity-100' : ''} transition-opacity duration-300`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <div className="flex-1 min-w-0">
                    {isEditting ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setIsEditting(false);
                                    onEdit(editText);
                                }
                            }}
                            className="w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-cyan-400 caret-cyan-300 selection:bg-cyan-500/30"
                            autoFocus
                        />
                    ) : (
                        <div className="relative truncate">
                            <div className={`text-lg sm:text-xl text-white/90 font-light transition-all duration-300 
                            ${finished ? "line-through translate-x-2" : ""}`}>
                                {todoData}
                            </div>
                            {finished && (
                                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-cyan-400/40 transform -translate-y-1/2" />
                            )}
                        </div>
                    )}
                </div>

                <div className="flex gap-3 shrink-0">
                    <button 
                        onClick={() => {
                            if (isEditting && editText.trim() === "") return;
                            setIsEditting(!isEditting);
                            onEdit(editText);
                        }}
                        className={`p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 
                        ${isEditting ? "text-green-400" : "text-cyan-400"}`}
                        disabled={isEditting && editText.trim() === ""}
                    >
                        {isEditting ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        )}
                    </button>
                    
                    <button 
                        onClick={onDelete}
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 active:scale-90"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
