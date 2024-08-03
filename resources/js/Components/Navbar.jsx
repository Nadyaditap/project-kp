import React from "react";
import Container from "./Container";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const menu_items = [
        { title: "Menu", href: "/" },
        { title: "Profile", href: "/" },
        { title: "Visi & Misi", href: "/" },
        { title: "Kegiatan", href: "/" },
    ];
    return (
        <nav className="flex items-center justify-between py-3 px-32">
            <div>
                <h3 className="text-[#148F77] text-xl font-semibold">
                    SDN Gambir 042
                </h3>
            </div>
            <nav>
                <ul className="flex items-center gap-5">
                    {menu_items.map((menu, i) => (
                        <Link
                            key={i}
                            className="hover:bg-[#148F77] hover:text-white font-semibold rounded-full px-6 py-3"
                            href={menu.href}
                        >
                            <li>{menu.title}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </nav>
    );
}
