import { contactData } from '../../data';

export default function ContactMe(){
    return (
        <div id='contacts' className='mb-24'>
            <h2 className="text-[#ffa500] text-center text-5xl font-bold mb-8">
                Contact Me
            </h2>
            <div className='flex flex-wrap justify-center w-[95%] m-5'>
                {contactData.map((contact, index) => (
                    <div 
                        key={index} 
                        className='w-[calc(70%-20px)] max-w-[400px] m-4 h-[180px] border border-gray-300 flex flex-col bg-[#3bd7e9]'
                    >
                        <div className='mt-5 flex-1 flex justify-center items-center'>
                            <img 
                                src={contact.Icon} 
                                alt={contact.Text} 
                                className='w-[100px] h-[100px]'
                            />
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <p className='text-2xl'>
                                <a 
                                    href={contact.Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-blue-950 hover:underline'
                                >
                                    {contact.Text}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}