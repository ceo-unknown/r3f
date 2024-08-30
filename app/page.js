import HeroSection from "./components/hero-section/HeroSection";
import styles from "./page.module.css";
import Post from "./post/page";
import SuggestPost from "./post/SuggestPost";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
          <Post />
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <SuggestPost />
        </div>
      </div>
    </>
  );
}
