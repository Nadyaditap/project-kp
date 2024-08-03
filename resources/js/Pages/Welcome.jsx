import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import HeroSection from "./HeroSection";
import Footer from "@/Components/Footer";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="SDN 042 Gambir" />

            <div className="selection:bg-green-600 selection:text-white min-h-screen">
                <Header />
                <Navbar />
                <HeroSection />
                <Footer />
            </div>
        </>
    );
}
