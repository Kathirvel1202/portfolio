import AboutImg from '../assets/resume1.jpeg';

export default function resume() {
    const config ={
        link:'https://drive.google.com/file/d/1bJZGKT1tdT9oC8fm4iox0NVejlJ4zOIi/view?usp=drive_link'
    }
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-8 py-16 md:py-24 justify-center items-center "id='resume'>
            {/* Image Section */}
            <div className="md:w-1/3 md:pr-12 mb-8 md:mb-0 flex justify-center">
                <img
                    src={AboutImg}
                    alt="A portrait or representation of the developer, M Kathirvel"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 flex justify-center md:justify-start">
                <div className="flex flex-col justify-center w-full text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl text-white border-b-4 w-full max-w-[180px] border-primary mb-4 font-bold tracking-wide">
                        Resume
                    </h1>
                    <p className="text-white text-lg  md:text-xl mb-6 leading-relaxed">
                        You can view my resume and download it by clicking the button below.
                    </p>
                    {/* Resume Download Button */}
                    <a
                        href={config.link}  
                        className="btn"
                        download
                    >
                        Here
                    </a>
                </div>
            </div>
        </section>
    );
}
