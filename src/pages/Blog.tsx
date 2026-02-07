import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Blog"
        description="Industry insights, technical articles, and thought leadership on energy operations, corrosion management, digital transformation, and sustainable practices."
        canonical="/blog"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <Header />
      <PageBreadcrumb />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
