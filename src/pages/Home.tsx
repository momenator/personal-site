const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            YOUR NAME
          </h1>
          <div className="w-24 h-1 bg-foreground"></div>
        </div>

        <div className="max-w-2xl space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed">
            Developer. Photographer. Writer.
          </p>
          
          <p className="text-base md:text-lg text-grey-500 leading-relaxed">
            Creating digital experiences through code and capturing moments through the lens. 
            This is where technology meets art, where function meets form, where brutalism meets beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider">CURRENTLY</h2>
            <p className="text-grey-500">
              Building minimalist web experiences and documenting urban landscapes.
            </p>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider">CONTACT</h2>
            <div className="space-y-1 text-grey-500">
              <p>email@example.com</p>
              <p>github.com/username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
