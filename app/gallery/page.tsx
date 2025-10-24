import SculptureSlider from "../components/SculptureSlider";

const GalleryPage = () => {
  // Data updated with the correct paths to your images
  const sculptures = [
    {
      id: 1,
      title: "Basreliefs",
      images: [
        "/art/Basreliefs/1.jpg",
        "/art/Basreliefs/2.jpg",
        "/art/Basreliefs/3.jpg",
        "/art/Basreliefs/4.jpg",
        "/art/Basreliefs/5.jpg",
        "/art/Basreliefs/6.jpg",
      ],
    },
    {
      id: 2,
      title: "Church Georgia ~ 2008-2012",
      images: [
        "/art/ChurchGeorgia/1.jpg",
        "/art/ChurchGeorgia/2.jpg",
        "/art/ChurchGeorgia/3.jpg",
      ],
    },
    {
      id: 3,
      title: "Church Georgia ~ 2013",
      images: [
        "/art/ChurchGeorgia1/3.jpg",
        "/art/ChurchGeorgia1/2.jpg",
        "/art/ChurchGeorgia1/4.jpg",
        "/art/ChurchGeorgia1/1.jpg",
      ],
    },
    {
      id: 4,
      title: "Church Georgia ~ 2019",
      images: [
        "/art/ChurchGeorgia2/1.jpg",
        "/art/ChurchGeorgia2/2.jpg",
        "/art/ChurchGeorgia2/3.jpg",
        "/art/ChurchGeorgia2/4.jpg",
        "/art/ChurchGeorgia2/5.jpg",
        "/art/ChurchGeorgia2/6.jpg",
        "/art/ChurchGeorgia2/7.jpg",
        "/art/ChurchGeorgia2/8.jpg",
      ],
    },
    {
      id: 5,
      title: "Holly Table ~ Rusia",
      images: ["/art/HollyTable/2.jpg", "/art/HollyTable/1.jpg"],
    },
    {
      id: 6,
      title: "Iconostas Moscow",
      images: [
        "/art/IconostasMoscow/1.jpg",
        "/art/IconostasMoscow/2.jpg",
        "/art/IconostasMoscow/3.jpg",
        "/art/IconostasMoscow/4.jpg",
        "/art/IconostasMoscow/5.jpg",
        "/art/IconostasMoscow/6.jpg",
        "/art/IconostasMoscow/7.jpg",
        "/art/IconostasMoscow/8.jpg",
        "/art/IconostasMoscow/9.jpg",
        "/art/IconostasMoscow/10.jpg",
        "/art/IconostasMoscow/11.jpg",
        "/art/IconostasMoscow/12.jpg",
      ],
    },
    {
      id: 7,
      title: "Icons",
      images: [
        "/art/IconsArt/1.jpg",
        "/art/IconsArt/2.jpg",
        "/art/IconsArt/3.jpg",
        "/art/IconsArt/4.jpg",
        "/art/IconsArt/5.jpg",
        "/art/IconsArt/6.jpg",
        "/art/IconsArt/7.jpg",
        "/art/IconsArt/8.jpg",
        "/art/IconsArt/9.jpg",
        "/art/IconsArt/10.jpg",
        "/art/IconsArt/11.jpg",
        "/art/IconsArt/12.jpg",
      ],
    },
    {
      id: 8,
      title: "New York ~ exterior stone design ~ 2008-2009",
      images: [
        "/art/NewYork/1.jpg",
        "/art/NewYork/2.jpg",
        "/art/NewYork/3.jpg",
        "/art/NewYork/4.jpg",
        "/art/NewYork/5.jpg",
        "/art/NewYork/6.jpg",
        "/art/NewYork/7.jpg",
        "/art/NewYork/8.jpg",
      ],
    },
    {
      id: 9,
      title: "Georgia ~ exterior stone design ~ 2012-2013",
      images: ["/art/Georgia/1.jpg", "/art/Georgia/2.jpg"],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8 pt-16'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-12'>
        Gallery
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12'>
        {sculptures.map((sculpture) => (
          <div key={sculpture.id}>
            <SculptureSlider images={sculpture.images} />
            <h3 className='text-lg font-semibold text-gray-800 mt-4 text-center'>
              {sculpture.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
