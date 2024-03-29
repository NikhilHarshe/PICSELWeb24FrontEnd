import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Footer from '../Components/Footer';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6fxf70q', 'template_3p20258', form.current, {
        publicKey: 'XDCa82MUa-HM8ZKGs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          toast.success("Message Send Successfuly");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message Send Failed");
        },
      );
  };

  const address = encodeURIComponent("KDK College of Engineering, Great Nag Road, Nandanvan, Nagpur, Maharashtra, India");
  return (
    <>

      <section className="text-gray-400 bg-gray-900 body-font relative mt-0">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${address}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
            // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.40)' }}
            ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">KARMAVEER DADASAHEB KANNAMWAR COLLEGE OF ENGINEERING
                  Great Nag Road, Nandanvan, Nagpur– 440 024</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:example@email.com" className="text-indigo-400 leading-relaxed">faceit.kdkce@gmail.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">797 235 4324</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5">Your feedback is valuable for refining and enhancing performance, driving progress, and guiding improvement.</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name <sup className=' text-red-500'>*</sup></label>
                <input type="text" name="user_name" required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className='relative mb-4 '>
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email <sup className=' text-red-500'>*</sup> </label>
                <input type="email" name="user_email" required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message <sup className=' text-red-500'>*</sup></label>
                <textarea name="message" required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
              {/* <input type="submit" value="Send" /> */}
              <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3">Creative feedback shapes improvement. Share your insights!</p>
            </form>
          </div>
        </div>
      </section>
      <div className=' border-t border-gray-400'>
      <Footer/>
      </div>
    </>
  )
}

export default ContactUs
