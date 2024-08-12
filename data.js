export const SkillData = [
    {
        skillType: "Programming Languages:",
        skillTypeLogo: "./code.png", 
        techSkills: [
          { name: "C Programming", logo: "./cprog.png" },
          { name: "Python", logo: "./python.png" },
          { name: "JavaScript", logo: "./javascript.png" },
        ],
    },

    {
        skillType: "Front-end Tools:",
        skillTypeLogo: "./flogo.png",
        techSkills: [
          { name: "HTML", logo: "./html.png" },
          { name: "CSS", logo: "./css.png" },
          { name: "Bootstrap", logo: "./bootstrap.png" },
          { name: "React Js", logo: "./react.png" },
          { name: "Jquery", logo: "./jquery.png" },
        ],
    },

    {
        skillType: "Back-end & Database Tools:",
        skillTypeLogo: "./blogo.png",
        techSkills: [
          { name: "Node.js", logo: "./nodejs.png" },
          { name: "Express.js", logo: "./expressjs.png" },
          { name: "SQL", logo: "./sql.png" },
          { name: "PostgreSQL", logo: "./postgresql.png" },
        ],
    },

    {
        skillType: "API & Version Control Tools:",
        skillTypeLogo: "./apilogo.png",
        techSkills: [
          { name: "Rest API", logo: "./restapi.png" },
          { name: "Postman", logo: "./postman.png" },
          { name: "Git", logo: "./git.png" },
          { name: "GitHub", logo: "./github.png" },
        ],
    },    
];

export const ProjectData = [
    {
        Title: "Tic-Tac-Toe",
        Image: "./tictactoe.png",
        Description: "Made with React, this classic game of tic-tac-toe is the perfect time killer for moments when you are feeling bored.",
        Link: "https://kawaljeet35.github.io/tic-tac-toe/"
    },

    {
        Title: "Random Joke Generator",
        Image: "./jokes.png",
        Description: "Made with HTML, CSS, and Javascript, this website fetches a random joke from the user's selected category.",
        Link: "https://kawaljeet35.github.io/joke_generator/"
    },

    {
        Title: "To Do List",
        Image: "./todolist.png",
        Description: "Made with React, this web app helps create a to-do list to keep track of your tasks and manage your time efficiently.",
        Link: "https://kawaljeet35.github.io/todolist/"
    },

    {
        Title: "Palindrome Checker",
        Image: "./palindrome.png",
        Description: "Made with HTML, CSS, and Javascript, this website checks if the input text or string is a palindrome or not.",
        Link: "https://kawaljeet35.github.io/palindrome_checker/"
    },

    {
        Title: "BMI Calculator",
        Image: "./calc.png",
        Description: "Made with HTML, CSS, and Javascript, it calculates a person's BMI from the user's entered height and weight.",
        Link: "https://kawaljeet35.github.io/bmi_calculator/"
    },

    {
        Title: "Love Calculator",
        Image: "./love.png",
        Description: "Made with HTML, CSS, and Javascript, this website calculates love compatibility percentage between two love birds.",
        Link: "https://kawaljeet35.github.io/love_calculator/"
    },
];

export const contactData = [
    {
        Mode: "Phone",
        Icon: "./call.png",
        Text: "+91-7903352792",
        Link: ""
    },

    {
        Mode: "Email",
        Icon: "./gmail.png",
        Text: "Gmail",
        Link: "mailto:kawaljeet35@gmail.com"
    },

    {
        Mode: "Linkedin",
        Icon: "./linkdin.png",
        Text: "Linkedin",
        Link: "https://www.linkedin.com/in/kawaljeet-singh-123354188/"
    },

    {
        Mode: "GitHub",
        Icon: "./git-hub.png",
        Text: "GitHub",
        Link: "https://github.com/Kawaljeet35"
    },
];
    

// import React from 'react';
// import emailjs from 'emailjs-com';

// export default function ContactForm() {
//     function sendEmail(e) {
//         e.preventDefault();

//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//             .then((result) => {
//                 console.log(result.text);
//                 alert('Message sent successfully!');
//             }, (error) => {
//                 console.log(error.text);
//                 alert('An error occurred, please try again.');
//             });
//     }

//     return (
//         <form onSubmit={sendEmail}>
//             <h2>Message Me</h2>
//             <input type="text" name="from_name" placeholder="Your Name" required />
//             <input type="email" name="email" placeholder="Your Email" required />
//             <textarea name="message" placeholder="Your Message" required></textarea>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
