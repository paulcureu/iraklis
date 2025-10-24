const ContactPage = () => {
  return (
    <div className='container mx-auto px-4 py-8 pt-16'>
      <h1 className='text-4xl font-bold text-gray-800 text-center mb-6'>
        Contact Iraklis
      </h1>
      <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
        Pentru orice întrebări, colaborări sau solicitări, vă rugăm să ne
        contactați direct. Suntem aici pentru a vă oferi cele mai bune soluții
        artistice.
      </p>

      <div className='grid md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-lg shadow-xl'>
        {/* Contact Information Column */}
        <div className='space-y-8 text-center md:text-left'>
          <div className='flex items-center justify-center md:justify-start space-x-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <p className='text-xl text-gray-800 font-semibold'>
              Email:{" "}
              <a
                href='mailto:contact@iraklis.com'
                className='text-gray-600 hover:text-gray-900'
              >
                contact@iraklis.com
              </a>
            </p>
          </div>

          <div className='flex items-center justify-center md:justify-start space-x-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
            <p className='text-xl text-gray-800 font-semibold'>
              Phone:{" "}
              <a
                href='tel:+40722123456'
                className='text-gray-600 hover:text-gray-900'
              >
                +30 697 542 1099
              </a>
            </p>
          </div>

          <div className='flex justify-center md:justify-start space-x-6 mt-8'>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 text-3xl'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-gray-900 text-3xl'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>

        {/* Visual Placeholder Column */}
        <div className='w-full h-64 md:h-auto bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-lg'>
          Locație / Hartă Placeholder
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
