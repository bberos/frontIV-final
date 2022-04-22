interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
  episode: string[];
  gender: string;
  origin: {
    name: string;
  };
}

export default Character;
