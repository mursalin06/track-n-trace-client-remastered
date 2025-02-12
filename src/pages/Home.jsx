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
            <section>
                <LatestItems></LatestItems>
            </section>
            <section>
                <Reviews></Reviews>
            </section>
            <section className="bg-base-300">
                <FAQ></FAQ>
            </section>
            <section>
                <NewsLetter></NewsLetter>
            </section>
        </div>
    );
};

export default Home;