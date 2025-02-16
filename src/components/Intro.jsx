export default function Intro() {
  return (
    <div>
      <p className="font-bold text-4xl text-center text-white mt-64">
        Hi there!
        <br />
        My name is <span className="text-[#ffa500]">Kawaljeet</span>, <br />
        and I'm a <span className="text-[#ffa500]">full-stack developer</span>.
      </p>
      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/164dLH3KLahBAn6J19j8c2kkqByyJWaz_/view",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="hover:bg-blue-800 rounded-full border border-black bg-blue-700 font-semibold text-xl font-sans text-white py-3 px-6 mx-auto block mt-4"
      >
        Download My CV
      </button>
    </div>
  );
}
