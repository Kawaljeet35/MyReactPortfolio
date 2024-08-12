export default function Intro(){
    return (
        <div>
            <p 
                className="font-bold text-4xl text-center text-white mt-64">
                    Hi there!<br/>My name is <span className="text-[#ffa500]">Kawaljeet</span>, <br/>
                    and I'm a <span className="text-[#ffa500]">full-stack developer</span>.
            </p>
            <button
                onClick={() => window.open("https://docs.google.com/document/d/1c4DPIxqk-Uu11-BI7y-btwR-96EhV9QqWVqyPfMhzWA/edit?usp=sharing", '_blank', 'noopener,noreferrer')}
                className="hover:bg-blue-800 rounded-full border border-black bg-blue-700 font-semibold text-xl font-sans text-white py-3 px-6 mx-auto block mt-4">
                    Download My CV
            </button>
        </div>
    );
}
