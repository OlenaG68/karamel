import Celebrate from "@/components/contentBlock/Celebrate";
import ContactForm from "@/components/contentBlock/ContactForm";
import FirstBlock from "@/components/contentBlock/FirstBlock";
import Funs from "@/components/contentBlock/Funs";
import OurMission from "@/components/contentBlock/OurMission";
import Price from "@/components/contentBlock/Price";
import Services from "@/components/contentBlock/Services";

export default function Home() {
    return (
        <main>
            <FirstBlock />
            <Services />
            <ContactForm />
            <OurMission />
            <Funs />
            <Celebrate />
            <Price />
            <ContactForm />
        </main>
    );
}
