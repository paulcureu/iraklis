import Image from "next/image";

const AboutPage = () => {
  return (
    <div className='bg-white py-16'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Image Column */}
          <div className='relative w-full rounded-lg overflow-hidden pb-[100%]'>
            <Image
              src='/artist.jpg'
              alt='Iraklis, the sculptor'
              layout='fill'
              objectFit='cover'
            />
          </div>

          {/* Text Column */}
          <div>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>About Me</h1>
            <div className='space-y-4 text-gray-600'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, turpis et commodo pharetra, est eros bibendum
                elit, nec luctus magna felis sollicitudin mauris. Integer in
                mauris eu nibh euismod gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
