import React from "react";

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10"></div>
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      <div className="container mx-auto px-6 py020 md:py-24 lg:py-28 xl:py-42">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-60">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                  New
                </span>
                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border-neutral-800/50">
                  <i className="bx bx-trending-up mr-1"></i>Next Generation
                  Design System
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
