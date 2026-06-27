
"use client";

import { useState } from "react";
import { User } from "lucide-react";


export default function Header({ setModal }) {

  return (
    <header className="w-full h-20 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 lg:px-10 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center shadow-sm">
          <span className="text-white font-bold text-lg">
            N
          </span>
        </div>

        <div>
          <h1 className="text-xl font-bold text-black tracking-tight">
            NomosTruck
          </h1>

          <p className="text-xs text-gray-400">
            Painel administrativo
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
          <User onClick={() => setModal(true)} size={20}></User>
        </div>

      </div>

    </header>
  )
}

