import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  addToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  addToStack,
  isAdded
}: TechnologyCardProps) => {

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      {/* Top */}
      <div className="flex items-start justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14 object-contain"
        />

        <span className="badge badge-secondary">
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="text-xl font-bold mt-5">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 h-12">
        {technology.description}
      </p>

      {/* Category & Difficulty */}
      <div className="flex gap-2 mt-5">

        <span className="badge badge-outline">
          {technology.category}
        </span>

        <span className="badge badge-outline">
          {technology.difficulty}
        </span>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-6">

        <span className="font-semibold">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => addToStack(technology)}
          disabled={isAdded}
          className={`px-4 py-2 rounded-lg text-sm ${
            isAdded
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "gradient-btn text-white"
          }`}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>

      </div>

    </div>
  );
};

export default TechnologyCard;