const links = [
  { name: "Home", path: "/" },
  { name: "List", path: "/list" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Blog", path: "/blog" },
];

const Sidebar = () => {
  return (
    <div className="sticky top-0 min-h-screen overflow-auto bg-[#310052] w-60">
      {links.map((link) => (
        <div
          key={link.name}
          className="px-4 py-5 text-lg text-gray-200 fon-semibold border-b"
        >
          <a href={link.path} className="block h-full">
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
