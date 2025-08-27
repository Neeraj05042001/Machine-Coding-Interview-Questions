import React from "react";
export const carouselData = [
  {
    id: 1,
    title: "The Dark Knight",
    description: "A thrilling action film directed by Christopher Nolan.",
    image:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?w=800&h=450&fit=crop",
  },
  {
    id: 2,
    title: "Interstellar",
    description:
      "A journey beyond the stars exploring love, time, and survival.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
  },
  {
    id: 3,
    title: "Inception",
    description: "A mind-bending heist where dreams are the battlefield.",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=450&fit=crop",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    description:
      "The epic conclusion to the Infinity Saga of the Marvel universe.",
    image:
      "https://images.unsplash.com/photo-1542204637-e67bc7d41e8c?w=800&h=450&fit=crop",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    description:
      "The multiverse opens, bringing familiar villains into Spider-Man's world.",
    image:
      "https://images.unsplash.com/photo-1504457046781-818b91b1f5ca?w=800&h=450&fit=crop",
  },
];

const App = () => {
  return (
    <div className="p-6 flex ">
      {carouselData.map((card) => (
        <div className="card-container border bg-amber-200 relative">
          <img src={card.image} />
          <div className="absolute top-[50%] flex justify-between w-full px-2">
            <button className="bg-gray-300 px-4 py-2 rounded-full">left</button>
            <button className="bg-gray-300 px-4 py-2 rounded-full">
              right
            </button>
          </div>
          <div className=" absolute bottom-10 w-full  flex justify-center gap-2 ">
            <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
            <div className="bg-gray-300 h-4 w-4 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
