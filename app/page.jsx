import Feed from "@/components/Feed";
import Form from "@/components/Form";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import PromptCard from "@/components/PromptCard";
import Provider from "@/components/Provider";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Magna occaecat dolore quis excepteur nisi velit reprehenderit minim
        ipsum aliqua. Eu mollit dolore dolor reprehenderit nisi aliquip anim est
        ad eu pariatur anim minim aliqua. Quis ullamco Lorem eiusmod magna
        cillum. Deserunt sit do ut amet excepteur eiusmod nisi quis ullamco.
        Reprehenderit Lorem cupidatat deserunt exercitation mollit fugiat
        reprehenderit do ad.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
