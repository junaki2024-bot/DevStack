import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const YourStack = ({
  stack,
  removeFromStack,
  removeAll
}: YourStackProps) => {

  return (
    <div className="bg-white border rounded-2xl p-5 sticky top-24">

      <h2 className="text-2xl font-bold">
        Your Stack
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        {stack.length} Technology Selected
      </p>

      {/* Empty State */}
      {stack.length === 0 && (
        <div className="text-center py-16">

          <div className="text-5xl">
            🧰
          </div>

          <p className="text-gray-500 mt-4">
            Your stack is empty
          </p>

          <p className="text-gray-400 text-sm">
            Add technologies to build your stack
          </p>

        </div>
      )}

      {/* Selected Technologies */}
      {stack.length > 0 && (
        <div className="mt-5">

          <div className="space-y-3">

            {stack.map((technology) => (

              <div
                key={technology.id}
                className="flex items-center justify-between border rounded-xl p-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10"
                  />

                  <div>
                    <h4 className="font-semibold">
                      {technology.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {technology.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => removeFromStack(technology.id)}
                  className="text-red-500 text-xl"
                >
                  ✕
                </button>

              </div>

            ))}

          </div>

          <button
            onClick={removeAll}
            className="w-full mt-5 border border-red-300 text-red-500 py-2 rounded-lg"
          >
            Remove All
          </button>

        </div>
      )}

    </div>
  );
};

export default YourStack;