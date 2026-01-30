const Home = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-24 md:space-y-32">
        {/* Monumental header - Rick Owens inspired */}
        <header className="space-y-8">
          <h1 className="text-display-xl font-display text-monumental">
            YOUR
            <br />
            NAME
          </h1>
          <div className="w-16 h-px bg-foreground/20"></div>
        </header>

        {/* Intro - Acne Studios inspired light weight */}
        <div className="max-w-xl space-y-6">
          <p className="text-2xl md:text-3xl text-light leading-snug tracking-tight">
            Developer. Photographer. Writer.
          </p>

          <p className="text-base text-grey-400 leading-relaxed">
            Creating digital experiences through code and capturing moments through the lens.
            Where function meets form.
          </p>
        </div>

        {/* Info grid - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-8">
          <div className="space-y-4">
            <span className="label-stark">Currently</span>
            <p className="text-sm text-grey-500 leading-relaxed">
              Building minimalist web experiences and documenting urban landscapes.
            </p>
          </div>

          <div className="space-y-4">
            <span className="label-stark">Contact</span>
            <div className="space-y-2 text-sm text-grey-500">
              <p>email@example.com</p>
              <p>github.com/username</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="label-stark">Location</span>
            <p className="text-sm text-grey-500">
              Somewhere, Earth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
