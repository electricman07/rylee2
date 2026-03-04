import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container min-h-screen min-w-screen flex justify-center bg-[#c58f60]">
      <div className="container w-screen m-0 p-0 box-border flex flex-col">
        <h1 className="contact-heading text-center text-8xl mt-28 mb-16 ml-5">
          Contact Me
        </h1>
        <div className="flex-container flex">
          <div className="left-box w-md flex flex-col m-5">
            <div className="image-box">
              <img
                src="/images/RyleeSitting.jpg"
                alt="rylee lying on a couch"
                className="image-contact w-100 shadow-lg rounded-xl"
              />
            </div>
            <div className="text-box">
              <p className="ml-5">Feel free to send me a message!</p>
              <p className="ml-5">
                I love to hear from my viewers, so tell me about yourself.
              </p>
            </div>
          </div>

          <div className="right-box w-md">
            <form action="POST" className="contact-form flex flex-col">
              <label htmlFor="first-name" className="form-component ">
                First Name:
              </label>
              <input
                type="text"
                id="first-name"
                className=" form-color p-2.5 pb-2.5 mb-2.5 text-2xl rounded-xl shadow-lg border-x border-[#d9d9d9] text-[#c58f60] bg-[#d9d9d9]"
              />
              <label htmlFor="last-name" className="form-component">
                Last Name:
              </label>
              <input
                type="text"
                id="last-name"
                className=" form-color  p-2.5 pb-2.5 mb-2.5 text-2xl rounded-xl shadow-lg border-x border-[#d9d9d9] text-[#c58f60] bg-[#d9d9d9]"
              />
              <label htmlFor="email" className="form-component">
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" form-color  p-2.5 pb-2.5 mb-2.5 text-2xl rounded-xl shadow-lg border-x border-[#d9d9d9] text-[#c58f60] bg-[#d9d9d9]"
              />
              <label htmlFor="Message:" className="form-component">
                Message
              </label>
              <textarea
                id="Message"
                className="form-item form-color p-2.5 pb-2.5 mb-2.5 text-2xl rounded-xl  shadow-lg  text-[#c58f60] bg-[#d9d9d9]"
              ></textarea>
              <input
                type="button"
                value="Submit"
                className="submit-button mt-2.5 pt-2.5 pb-2.5 bg-[#d9d9d9] border-x border-[#d9d9d9] rounded-xl"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
