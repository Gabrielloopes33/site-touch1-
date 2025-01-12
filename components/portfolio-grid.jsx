import Image from "next/image";

const PortfolioGrid = () => {
  // Exemplo de dados (imagens e nomes dos projetos)
  const projects = [
    { id: 1, image: "/images/IMG_0012.png", name: "Brazza Grill" },
    { id: 2, image: "/images/IMG_0013.png", name: "Ative Gestão" },
    { id: 3, image: "/images/IMG_0061.png", name: "Brazza Grill" },
    { id: 4, image: "/images/IMG_0333.png", name: "Ganja Tabacaria" },
    { id: 5, image: "/images/IMG_0085.png", name: "Brazza Grill" },
    { id: 6, image: "/images/IMG_0165.png", name: "Brazza Grill" },
    { id: 7, image: "/images/IMG_0163.png", name: "Brazza Grill" },
    { id: 8, image: "/images/IMG_0165.png", name: "Brazza Grill" },
    { id: 9, image: "/images/IMG_0170.png", name: "Brazza Grill" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {projects.map((project) => (
        <div key={project.id} className="group relative overflow-hidden rounded-lg">
          {/* Imagem do projeto */}
          <Image
            src={project.image}
            alt={project.name}
            layout="responsive"
            width={400}
            height={300}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Nome do projeto (aparece ao hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white text-lg font-bold">{project.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
