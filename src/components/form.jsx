export default function Form() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 lg:px-32 sm:px-20 min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-2/5 flex flex-col justify-end text-center md:text-left mb-8 md:mb-0">
        <h4 className="text-md sm:lg text-gray-500 uppercase tracking-wider mb-4">
          Get In Touch
        </h4>
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-loose">
          Do You Have Any Questions? We’ll Be Happy To Assist!
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 p-4 md:p-10">
        <form className="flex w-full flex-wrap justify-between gap-4 md:gap-6">
          {/* First Name */}
          <div className="w-full lg:w-[47%]">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-lg bg-[#3EB3FC1A] w-full h-14 md:h-20"
            />
          </div>
          {/* Last Name */}
          <div className="w-full lg:w-[47%]">
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-lg bg-[#3EB3FC1A] w-full h-14 md:h-20"
            />
          </div>
          {/* Email */}
          <div className="w-full lg:w-[47%]">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-[#3EB3FC1A] w-full h-14 md:h-20"
            />
          </div>
          {/* Phone */}
          <div className="w-full lg:w-[47%]">
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-[#3EB3FC1A] w-full h-14 md:h-20"
            />
          </div>
          {/* Message */}
          <div className="w-full">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-[#3EB3FC1A] w-full"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg py-3 rounded-lg w-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
