export default function Contact() {
    const config = {
      email: 'mkathirvelmuniraj@gmail.com',
      phone: '9626928436',
    };
  
    return (
      <section className="flex flex-col bg-primary px-5 py-32" id="contact">
        {/* Text Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl text-white border-b-4 w-full max-w-[180px] border-secondary mb-4 font-bold tracking-wide text-center md:text-left">
            Contact
          </h1>
  
          <p className="pb-5 text-white">
            If you want to discuss more in details, please contact me
          </p>
          <p className="pb-5 text-white">
            <span className="font-bold">Email:</span> {config.email}
          </p>
          <p className="py-2 text-white">
            <span className="font-bold">Phone:</span> {config.phone}
          </p>
        </div>
      </section>
    );
  }
  