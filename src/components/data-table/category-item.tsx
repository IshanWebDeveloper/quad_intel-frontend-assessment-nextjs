const categoryColours: {
  [key: string]: { bg: string; text: string };
} = {
  Automation: { bg: "#f6e6ff", text: "#3e2868" },
  "E-commerce": { bg: "#fff8e5", text: "#5e4c36" },
  Mobile: { bg: "#f2edab", text: "#857d4f" },
  B2B: {
    bg: "#fff3cb",
    text: "#6b6123",
  },
  SAAS: { bg: "#e1feea", text: "#263c30" },
  Marketplace: { bg: "#e1feea", text: "#263c30" },
  B2C: {
    bg: "#fff3cb",
    text: "#6b6123",
  },
  Technology: {
    bg: "#fff3cb",
    text: "#6b6123",
  },
  Transportation: {
    bg: "#fff3cb",
    text: "#6b6123",
  },
  Finance: { bg: "#e1feea", text: "#263c30" },
  Publishing: {
    bg: "#faedf9",
    text: "#612e4d",
  },
  "Web Services": { bg: "#d7f8ff", text: "#1a4f57" },
};

interface CategoryItemProps {
  category: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const color = categoryColours[category];
  return (
    <div
      style={{ backgroundColor: color?.bg, color: color?.text }}
      className={`rounded-sm w-fit h-fit  p-1 border border-1 text-nowrap font-semibold text-xs  `}
    >
      {category}
    </div>
  );
};

export default CategoryItem;
