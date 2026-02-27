import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen bg-[#c58f60]">
      <div className="container w-screen">
        <header className="header flex items-center justify-center gap-12 py-6 px-6 max-w-7xl mx-auto">
          <div className="text-container text-center ">
            <div className="text flex flex-col content-evenly items-center justify-center h-full w-full">
              <h2 className="pre-header text-4xl m-1 mt-8">Hello!!! I'm</h2>
              <h1 className="main-header text-8xl m-1 mt-20 ml-52">Rylee</h1>
              <h3 className="sub-header text-2xl mt-20 ml-40">
                the very friendly beagle
              </h3>
            </div>
          </div>
          <div className="image-header mt-2 mr-4 mb-2 flex justify-center items-center w-1/2">
            <img
              className="w100 h100 rounded-lg"
              src="/images/header.jpg"
              alt="image of Rylee sitting in the grass"
            />
          </div>
        </header>
      </div>
    </main>
  );
}
