import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;