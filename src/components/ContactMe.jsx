import { contactData } from '../../data';
import emailjs from 'emailjs-com';

const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = process.env.VITE_EMAILJS_USER_ID;

export default function ContactMe() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });

        e.target.reset();
    };

    return (
        <div id='contacts' className='mb-18'>
            <h2 className="text-[#ffa500] text-center text-4xl font-bold mb-8">
                Contact Me
            </h2>
            <div className='flex flex-wrap justify-center m-4'>
                <div className='flex flex-wrap w-full lg:w-[45%]'>
                    {contactData.map((contact, index) => (
                        <div 
                            key={index} 
                            className='w-[calc(50%-16px)] h-[168px] border border-gray-300 flex flex-col bg-[#3bd7e9] m-2'
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
                <form onSubmit={sendEmail} className='w-full lg:w-[calc(45%-16px)] h-[calc(336px+16px)] border border-gray-300 flex flex-col bg-[#3bd7e9] p-4 m-2'>
                    <p className='text-center font-semibold text-3xl mb-3'>Send me a message</p>
                    <input
                        type='text'
                        name='sender_name'
                        required
                        placeholder='Enter your name'
                        className='mb-3 p-2 border border-gray-300 rounded w-full'
                    />
                    <input
                        type='email'
                        name='sender_email'
                        required
                        placeholder='Enter your email'
                        className='mb-3 p-2 border border-gray-300 rounded w-full'
                    />
                    <textarea
                        required
                        name='message'
                        placeholder='Type your message here...'
                        className='mb-3 p-2 border border-gray-300 rounded w-full h-28'
                    />
                    <button type="submit" className='p-2 bg-green-600 hover:bg-green-700 text-white rounded w-full text-lg font-bold font-sans'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
