// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center font-poppins">
      <div className="text-center animate-fadeInUp">
        <h1 className="text-6xl font-bold mb-6 text-primary">Welcome to Waha Mobility</h1>
        <p className="text-2xl text-muted-foreground mb-8">Creating sustainable solutions for a better tomorrow</p>
        <div className="space-x-4">
          <a 
            href="/contact" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            Contact Us
          </a>
          <a 
            href="#" 
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
