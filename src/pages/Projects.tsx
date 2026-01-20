import Header from "@/components/Header";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <PageBreadcrumb />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
