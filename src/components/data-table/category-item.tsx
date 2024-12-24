const categoryColours: {
  [key: string]: { bg: string; text: string };
} = {
  Automation: { bg: "#3e2849", text: "#ad8ada" },
  "E-commerce": { bg: "#3d2f22", text: "#b38b6e" },
  Mobile: { bg: "#3d2f22", text: "#b38b6e" },
  B2B: {
    bg: "#3b2b22",
    text: "#b38b6e",
  },
  SAAS: { bg: "#222f22", text: "#469071" },
  Marketplace: { bg: "#222f22", text: "#469071" },
  B2C: { bg: "#222f22", text: "#b38b6e" },
  Technology: { bg: "#27304a", text: "#7da2d4" },
  Finance: {
    bg: "#3d2b22",
    text: "#bcaa60",
  },
  Publishing: {
    bg: "#5d3b53",
    text: "#dd9bdc",
  },
  "Web Services": { bg: "#223845", text: "#4997a5" },
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
