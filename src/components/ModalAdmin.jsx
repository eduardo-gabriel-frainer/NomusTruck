import { X, Settings, LogOut, Shield } from "lucide-react";

export default function ModalAdmin({ setModal }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">

            <div className="w-80 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">

                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Eduardo
                        </h3>

                        <p className="text-sm text-gray-400">
                            Painel administrativo
                        </p>
                    </div>

                    <button
                        onClick={() => setModal(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-5">

                    <label className="text-sm font-medium text-gray-600">
                        Nível de acesso
                    </label>

                    <div className="relative mt-2">
                        <Shield
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <select className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 outline-none focus:border-black transition">
                            <option>Administrador</option>
                            <option>Cozinha</option>
                            <option>Atendimento</option>
                        </select>
                    </div>

                    <hr className="my-5 border-gray-100" />

                    <div className="space-y-2">

                        <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-gray-100 transition text-gray-700">
                            <Settings size={18} />
                            Configurações
                        </button>

                        <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-red-50 transition text-red-500">
                            <LogOut size={18} />
                            Sair da conta
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}