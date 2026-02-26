import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#c58f60]">
      <main className="container w-screen">
        <header className="header flex items-center justify-center gap-12 py-16 px-6 max-w-7xl mx-auto">
          <div className="text-container">
            <div className="text">
              <h1 className="main-header text-8xl m-1 mt-20 ml-52">About Me</h1>
              <div className="mr-4 mb-2 mt-10 text-lg p-4">
                <p className="mb-4">
                  I am short for a beagle and have the traditional coloring with
                  spots on my lower legs and belly. People think I am a puppy
                  because of my size.
                </p>
                <p className="mb-4">
                  My nose is a trouble maker as when I get a scent of something
                  it leads me in that direction and I do not listen, so I always
                  stay on leash.
                </p>
                <p className="mb-4">
                  I do not like cats, and I do not socialize well with other
                  dogs, but I do tolerate a younger golden retriever named Sam.
                </p>
                <p className="mb-4">
                  When it comes to food, I like just about anything. I will eat
                  until I run out of food, but would continue to eat if I could.
                </p>
                <p className="mb-4">
                  I like to sleep, a lot. I spends a good amount of time lying
                  down when I am not walking or begging for food.
                </p>
              </div>
            </div>
          </div>
          <div className="image-header mt-2 mr-4 mb-2 flex justify-center items-center h-screen w-full">
            <img
              src="/images/about.jpg"
              alt="Rylee the Beagle"
              className="w100 h100 rounded-lg"
            />
          </div>
        </header>
      </main>
    </div>
  );
}
