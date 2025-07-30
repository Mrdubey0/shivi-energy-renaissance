import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;