import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/Technology";

function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);


  // Fetch JSON data
  useEffect(() => {

    const loadTechnologies = async () => {

      try {

        const response = await fetch("/technologies.json");

        const data = await response.json();

        setTechnologies(data);

        setLoading(false);

      } catch (error) {

        console.log(error);

        toast.error("Failed to load technologies");

        setLoading(false);

      }

    };

    loadTechnologies();

  }, []);


  // Add Technology
  const addToStack = (technology: Technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    // Duplicate
    if (alreadyAdded) {

      toast.warning(
        `${technology.name} is already in your stack`
      );

      return;
    }

    // Add
    setStack([
      ...stack,
      technology
    ]);

    toast.success(
      `${technology.name} added to your stack`
    );

  };


  // Remove Technology
  const removeFromStack = (id: string) => {

    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter(
        (item) => item.id !== id
      )
    );

    toast.info(
      `${technology?.name} removed from stack`
    );

  };


  // Remove All
  const removeAll = () => {

    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from stack"
    );

  };


  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <Hero />


      {/* Technology Section */}
      <section
        id="technologies"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        <div className="mb-10">

          <h2 className="text-4xl font-bold mt-2">
           <span className="text-black">Explore the</span> <span className="text-purple-500">Technologies</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Pick one technology per category to build 
            your ideal stack.
          </p>

        </div>


        {/* Loading State */}
        {loading ? (

          <div className="text-center py-20">

            <span className="loading loading-spinner loading-lg">
            </span>

            <p className="mt-4 text-gray-500">
              Loading technologies...
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-4 gap-6">

            {/* Cards */}
            <div className="col-span-3 grid grid-cols-3 gap-5">

              {technologies.map(
                (technology) => (

                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    addToStack={addToStack}
                    isAdded={stack.some(
                      (item) =>
                        item.id === technology.id
                    )}
                  />

                )
              )}

            </div>


            {/* Sidebar */}
            <div className="col-span-1">

              <YourStack
                stack={stack}
                removeFromStack={removeFromStack}
                removeAll={removeAll}
              />

            </div>

          </div>

        )}

      </section>


      <Footer />


      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>
  );
}

export default App;