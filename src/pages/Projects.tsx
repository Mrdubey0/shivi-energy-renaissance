import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Projects — Execution Outcomes & Case Studies"
        description="View Shivi Energy's proven project execution outcomes across ONGC, Oil India, IOCL — offshore platforms, refinery turnarounds, rigless interventions, and plug & abandonment operations."
        canonical="/projects"
        keywords="oilfield project execution, ONGC vendor, Oil India projects, corrosion management projects, rigless intervention case study, plug and abandonment India"
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
