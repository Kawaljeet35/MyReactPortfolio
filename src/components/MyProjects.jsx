import { ProjectData } from '../../data';

export default function MyProjects(){
    return (
        <div id="projects" className='scroll-m-20 m-24'>
            <h2 className="text-[#ffa500] text-center text-4xl font-bold mb-6">
                My Projects
            </h2>
            <div className="flex flex-wrap justify-center">
                {ProjectData.map((project, index) => (
                    <div key={index} className="bg-[#3bd7e9] w-full sm:w-2/5 m-4 p-4 border border-black flex flex-col items-center text-center">
                        <img src={project.Image} alt={project.Title} className="w-full" />
                        <div className="mt-4">
                            <h3 className="text-2xl underline font-semibold">{project.Title}</h3>
                            <p className="text-xl text-black mt-4">{project.Description}</p>
                            <button 
                                onClick={() => window.open(project.Link, '_blank', 'noopener,noreferrer')}  
                                className="mt-4 py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white text-lg rounded-full cursor-pointer"
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}