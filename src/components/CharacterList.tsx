import { useEffect, useState } from 'react';
import { Result, DataApi } from '../vite-env';
import { CharacterItem } from './CharacterItem';

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data: DataApi = await response.json();
      const { results } = data;
      setCharacters(results);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page >= 42) return;
    setPage(current => current + 1);
  };
  const handlePrevPage = () => {
    if (page <= 1) return;
    setPage(current => current - 1);
  };

  return (
    <div>
      <div className='flex justify-around'>
        <button
          className='bg-lime-300 text-xl text-black px-2 py-1 rounded disabled:opacity-70'
          disabled={page <= 1 || isLoading}
          onClick={handlePrevPage}
        >
          prev
        </button>
        <button
          className='bg-lime-300 text-xl text-black px-2 py-1 rounded disabled:opacity-70'
          disabled={page >= 42 || isLoading}
          onClick={handleNextPage}
        >
          next
        </button>
      </div>
      {isLoading ? (
        <div className=''>Loading...</div>
      ) : (
        <div>
          <div className='p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
            {characters.map(character => (
              <CharacterItem key={character.id} character={character} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
