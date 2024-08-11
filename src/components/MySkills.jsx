import { SkillData } from '../../data';

export default function MySkills(){
    return (
        <div id="my-skills" className='mt-28 h-full scroll-my-20'>
            <h2 className="text-[#ffa500] text-center text-4xl font-bold mb-8">
                My Skills
            </h2>
            {SkillData.map((skill, index) => (
                <div key={index} className="flex justify-between items-center mb-9">
                    <div className="flex items-center justify-start space-x-4 ml-40">
                        <img src={skill.skillTypeLogo} alt={skill.skillType} className="h-20 w-20" />
                        <h3 className='text-3xl text-white'>{skill.skillType}</h3>
                    </div>
                    <div>
                        <div className="flex justify-start space-x-4 mr-40 items-center">
                            {skill.techSkills.map((tech, i) => (
                            <img key={i} src={tech.logo} alt={tech.name} className="h-20 w-20" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}