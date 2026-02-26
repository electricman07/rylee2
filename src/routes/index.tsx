import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-[#c58f60]">
      <main className="container ">
        <header className="header flex items-center justify-center gap-12 py-16 px-6 max-w-7xl mx-auto">
          <div className="text-container text-center h-screen">
            <div className="text flex flex-col content-evenly items-center justify-center h-full">
              <h2 className="pre-header text-4xl m-1 mt-8">Hello!!! I'm</h2>
              <h1 className="main-header text-8xl m-1 mt-16">Rylee</h1>
              <h3 className="sub-header text-3xl ml-1 mt-16">
                the very friendly beagle
              </h3>
            </div>
          </div>
          <div className="image-header mt-2 mr-4 mb-2 flex justify-center items-center">
            <img
              className="w100 h100 rounded-lg"
              src="/images/header.jpg"
              alt="image of Rylee sitting in the grass"
            />
          </div>
        </header>
      </main>
    </div>
  );
}
