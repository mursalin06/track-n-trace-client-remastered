import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import LatestItems from "../components/LatestItems";
import NewsLetter from "../components/NewsLetter";
import PageTitle from "../components/PageTitle";
import Reviews from "../components/Reviews";

const Home = () => {
    return (
        <div
        style={{
            minHeight: "calc(100vh - 64px)",
        }}>
            <PageTitle title="Home | Track n Trace"></PageTitle>
            <section>
                <Banner></Banner>
            </section>
            <section className="bg-[#e6e6e6]">
                <LatestItems></LatestItems>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
            <section className="bg-base-300 px-4 md:px-0">
                <FAQ></FAQ>
            </section>
            <section className="mx-4 ">
                <NewsLetter></NewsLetter>
            </section>
        </div>
    );
};

export default Home;