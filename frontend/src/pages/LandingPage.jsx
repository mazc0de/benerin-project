import DefaultLayout from "../layouts/DefaultLayout";
import Header from "../components/Header/Header";
import CardLayananServis from "../components/CardLayananServis/CardLayananServis";
import CardReview from "../components/CardReview/CardReview";
import { Fragment } from "react";
import SectionAboutUs from "../components/SectionAboutUs/SectionAboutUs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
    AOS.init();
    return (
        <Fragment>
            <Navbar />
            <Header />
            <DefaultLayout>
                <CardLayananServis />
            </DefaultLayout>
            <SectionAboutUs />
            <CardReview />
            <Footer />
        </Fragment>
    );
}

export default LandingPage;
