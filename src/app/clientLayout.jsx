"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ModalAdmin from "../components/ModalAdmin";

export default function ClientLayout({ children }) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Header setModal={setModal} />

            {modal && (
                <ModalAdmin setModal={setModal} />
            )}

            <div className="flex overflow-hidden">
                <Sidebar />

                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </>
    );
}