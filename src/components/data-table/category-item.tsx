const categoryColours: {
  [key: string]: string;
} = {
  Automation: "#83698b",
  "E-commerce": "#3d2f22",
  B2B: "#3a2c22",
  SAAS: "#222f22",
  Marketplace: "#222f22",
  B2C: "#222f22",
  Technology: "#313740",
  Finance: "#3a2c22",
  Publishing: "#402c31",
  "Web Services": "#286e7c",
};

interface CategoryItemProps {
  category: string;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const colour = categoryColours[category];
  return (
    <div
      style={{ backgroundColor: colour }}
      className={`rounded-sm w-fit  px-1 border border-1  text-white`}
    >
      {category}
    </div>
  );
};

export default CategoryItem;
