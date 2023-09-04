import ContactForm from "@/components/contentBlock/ContactForm";
import FirstBlock from "@/components/contentBlock/FirstBlock";
import OurMission from "@/components/contentBlock/OurMission";
import Services from "@/components/contentBlock/Services";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <FirstBlock />
            <Services />
            <ContactForm />
            <OurMission />
        </main>
    );
}
