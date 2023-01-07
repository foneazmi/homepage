import { Clock } from "../../components";

const HOMEPAGE = [
  {
    title: "Media",
    contents: [
      {
        name: "Youtube",
        url: "https://www.youtube.com/",
      },
      {
        name: "Loklok",
        url: "https://www.loklok.com/",
      },
    ],
  },
  {
    title: "Social Media",
    contents: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const DashboardScreen = () => {
  return (
    <div className="flex flex-col h-screen bg-[#5f4b8b] justify-center items-center">
      <h1 className="text-5xl text-white">
        <Clock />
      </h1>
      <div className="flex flex-row justify-center mt-6 columns-auto">
        {HOMEPAGE.map((home, index) => (
          <div className="bg-[#272727] w-40 mx-2 p-3" key={`${index}-homepage`}>
            <h2 className="text-white text-lg mb-2">{home.title}</h2>
            <div className="flex flex-col overflow-auto h-24">
              {home.contents.map((content, index) => (
                <a
                  key={`${index}-home-content`}
                  className="text-white py-1 text-base opacity-70 hover:opacity-100"
                  href={content.url}
                >
                  {content.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
