import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TechnicalAutomation = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 tracking-tight">Technical Automation</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                API integrations, hosting solutions, and domain setup to streamline your digital operations.
              </p>
              <p className="text-lg text-foreground/80">
                Content for Technical Automation page goes here...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechnicalAutomation;

