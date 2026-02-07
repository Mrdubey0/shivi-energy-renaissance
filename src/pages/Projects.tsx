import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Execution Outcomes"
        description="View Shivi Energy's proven project execution outcomes across offshore platforms, refinery turnarounds, rigless interventions, and plug & abandonment operations."
        canonical="/projects"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />
      <Header />
      <PageBreadcrumb />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
