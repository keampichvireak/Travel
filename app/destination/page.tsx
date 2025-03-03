import { LayoutGrid } from "@/components/ui/layout-grid";
import "./destination.css";
function Destination() {
  // EUROPE
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Yellowstone National Park, Wyoming
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Covering 2.2 million acres, Yellowstone boasts geothermal wonders,
          diverse ecosystems, and iconic features like Old Faithful and the
          Grand Prismatic Spring. Don’t miss the wildlife-rich Lamar and Hayden
          Valleys, often called North America’s “Serengeti”.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Niagara Falls, Canada
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          The crashing waters of Niagara Falls—comprising two American falls and
          one Canadian—are truly awe-inspiring. Get up close on a boat ride (be
          prepared to get soaked!) or enjoy amazing aerial views.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Yosemite National Park, California
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Iconic granite cliffs, waterfalls, and giant sequoias define Yosemite.
          Glacier Point provides an unforgettable panorama
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Grand Canyon National Park, Arizona
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          The vastness and colorful layers of the Grand Canyon are mesmerizing.
          Hike along the rim or take a helicopter tour for breathtaking views.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1529439322271-42931c09bce1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1533094602577-198d3beab8ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1569418122371-ffc2554a3981?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const AsiaSkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">Angkor Wat</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Originally a Hindu temple dedicated to Vishnu, later transformed into
          a Buddhist temple.Largest religious monument in the world.
        </p>
      </div>
    );
  };

  const AsiaSkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          The Greate wall
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Constructed to protect against nomadic groups from the Eurasian
          Steppe.Best-known sections built by the Ming dynasty
        </p>
      </div>
    );
  };
  const AsiaSkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">Bali Island</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Hindu-majority province with rich arts, dance, sculpture, and
          music.Known as the “Island of gods.”
        </p>
      </div>
    );
  };
  const AsiaSkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">Langkawi</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Stunning beaches, waterfalls (like Seven Wells Waterfall), dense
          jungle, and lush mangroves
        </p>
      </div>
    );
  };

  const Asiacards = [
    {
      id: 1,
      content: <AsiaSkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1644651434676-c1937ecad149?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <AsiaSkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1547150492-da7ff1742941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <AsiaSkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <AsiaSkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1570533459920-076b827c7b69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Europe
  const EuropeSkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Plitvice Lakes National Park, Croatia
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Known for its 16 emerald lakes, magnificent waterfalls (including
          Veliki Slap, Croatia’s largest waterfall), and lush forests.Visit in
          fall or spring for a quieter experience -Santorini, Greece:Famous for
          its iconic caldera, colorful houses, and terraced vineyards.Largest
          island in a small circular archipelago in the southern Aegean Sea.
        </p>
      </div>
    );
  };

  const EuropeSkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Santorini, Greece
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Famous for its iconic caldera, colorful houses, and terraced
          vineyards.Largest island in a small circular archipelago in the
          southern Aegean Sea.
        </p>
      </div>
    );
  };
  const EuropeSkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">Cinque Terre</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Famous for ancient paths connecting villages, colorful houses, and
          terraced vineyards.
        </p>
      </div>
    );
  };
  const EuropeSkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          The Norwegian Fjords
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Dramatic landscapes include Geirangerfjord, Aurlandsfjord, Nærøyfjord,
          and Lysefjord.Formed by glaciers retreating and allowing the sea to
          fill in.
        </p>
      </div>
    );
  };

  const Europecards = [
    {
      id: 1,
      content: <EuropeSkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1661963345194-ae50221eb7bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <EuropeSkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1678266561093-324802646fb2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <EuropeSkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1548671074-349a73ad5733?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <EuropeSkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1661963248785-1ff8cbfa2cc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center mb-10">
        <h1 className="font-bold text-3xl font-serif medium-font md:text-center">
          These are the places we have visited and experienced firsthand.
        </h1>
      </div>
      <div className="h-auto md:h-auto sm:h-[70vh] sm:overflow-y-scroll medium">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl font-cursive">North America</h1>
        </div>
        <div className="h-screen py-5 w-full ">
          <LayoutGrid cards={cards} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl font-cursive">Asia</h1>
        </div>
        <div className="h-screen py-5 w-full">
          <LayoutGrid cards={Asiacards} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl font-cursive">Europe</h1>
        </div>
        <div className="h-screen py-5 w-full">
          <LayoutGrid cards={Europecards} />
        </div>
      </div>
    </>
  );
}

export default Destination;
