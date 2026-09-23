// 

import AboutImg from '../assets/about.webp';

export default function About() {

    const config={
        line1:' Hi, my name is M Kathirvel. I am a full-stack developer specializing in building beautiful websites using React.js + Tailwind CSS.',
        line2:'I am proficient in frontend technologies like React.js, AJAX, Axios, and Tailwind CSS, among others.',
        line3:'On the backend, I work with Django, MySQL, Node.js, and Python to create dynamic, scalable web applications.'
    }
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-8 py-16 md:py-24" id="about">
            {/* Image Section */}
            <div className="md:w-1/3 md:pr-12 mb-8 md:mb-0">
                <img
                    src={AboutImg}
                    alt="Portrait of  Kathirvel, a skilled full-stack developer"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 pr-12 flex justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl text-white border-b-4 w-full max-w-[240px] border-primary mb-4 font-bold tracking-wide text-center md:text-left">
                        About Me
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
                    {config.line1}
                    </p>
                    <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
                       {config.line2}
                        </p>
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                    {config.line3}
                    </p>
                </div>
            </div>
        </section>
    );
}
