const Contact = () => {
  return (
    <div
      id="contact"
      className="py-10 z-10 bg-black w-screen h-auto flex flex-col items-center"
    >
      <h1 className=" text-5xl md:text-6xl lg:text-6xl  font-bold py-8 capitalize"><span className="text-orange-600 ">Contact </span>Us</h1>
      <button className="flex flex-row justify-center items-center gap-2 w-48 h-16 px-4 py-2 rounded-full bg-white hover:bg-gray-200 text-black font-bold hover:scale-105 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
          class="w-8 h-8"
        >
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
        </svg>
        <a href="https://forms.gle/wC6Q16fqXsWba7oG7" className="text-xl">
          Contact Us
        </a>
      </button>
    </div>
  );
};

export default Contact;
