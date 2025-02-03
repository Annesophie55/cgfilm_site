export interface CastMember {
  name: string;
  role: string;
}

export interface Film {
  id: number;
  title: string;
  subtitle: string;
  releaseDate: string;
  poster: string;
  embedUrl: string;
  videoId: string;
  images: string[];
  description: string;
  cast: CastMember[];
  detailPage: string;
}


const films: Film[] = [
  {
    id: 1,
    title: "Les Sabots de Vénus",
    subtitle: "Sélection Festival de Cannes",
    releaseDate: "2023-05-17",
    poster: "/images/sabots_venus.webp",
    embedUrl: "https://www.youtube.com/embed/fdCmZEv1LLU",
    videoId: "fdCmZEv1LLU",
    images: [
      "/images/sabots-venus-1.webp",
      "/images/sabots-venus-2.webp",
      "/images/sabots-venus-3.webp"
    ],
    description: "Un clin d’oeil malicieux sur la santé et l’affaire du sang contaminé au milieu de paysages magnifiques dans les sept plus belles régions de France",
    cast: [
      { name: "Christian Barbier", role: "Personnage principal" },
      { name: "Jean-Paul Egalon", role: "Personnage secondaire" },
      { name: "Pierre Magré", role: "Musique originale" }
    ],
    detailPage: "/films/les-sabots-de-venus"
  },
  {
    id: 2,
    title: "L'Aile et la Bête",
    subtitle: "Un James Bond à la Jimmy-Paul Coti",
    releaseDate: "2021-09-10",
    poster: "/images/aile.webp",
    embedUrl: "https://www.youtube.com/embed/WfNqy_tRNcc",
    videoId: "WfNqy_tRNcc",
    images: [
      "/images/aile-bete-1.webp",
      "/images/aile-bete-2.webp",
      "/images/aile-bete-3.webp"
    ],
    description: "Un film d’action explosif avec une mise en scène inspirée des plus grands films d’espionnage.",
    cast: [
      { name: "Luc Moreau", role: "Agent secret" },
      { name: "Sophie Laurent", role: "Complice mystérieuse" }
    ],
    detailPage: "/films/l-aile-et-la-bete"
  }
];

export default films;


