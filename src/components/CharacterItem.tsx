import { Gender, Result, Status } from '../vite-env';
import { BiFemale, BiMale } from 'react-icons/bi';
import { RiGenderlessLine } from 'react-icons/ri';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

interface Props {
  character: Result;
}

export const CharacterItem = ({ character }: Props) => {
  const statusStyles = (status: Status) => {
    if (status === 'Alive') return 'bg-green-500';
    if (status === 'Dead') return 'bg-red-500';
    return 'bg-yellow-500';
  };

  const genderStyles = (gender: Gender) => {
    switch (gender) {
      case 'Female':
        return (
          <BiFemale className='inline align-middle text-pink-500' size={30} />
        );
      case 'Genderless':
        return (
          <RiGenderlessLine
            className='inline align-middle text-yellow-500'
            size={30}
          />
        );
      case 'Male':
        return (
          <BiMale className='inline align-middle text-sky-500' size={30} />
        );
      default:
        return (
          <BsFillQuestionCircleFill
            className='inline align-middle ml-1 mr-2'
            size={20}
          />
        );
    }
  };

  return (
    <div
      className='sm:w-[300px] mx-auto bg-slate-500 rounded-md overflow-hidden lg:w-full lg:flex md:overflow-auto transition hover:scale-105'
      key={character.id}
    >
      <img className='lg:w-2/5' src={character.image} alt={character.name} />
      <div className='p-2 lg:w-3/5'>
        <h2 className='text-2xl font-semibold'>{character.name}</h2>
        <p className='capitalize ml-2'>
          <span
            className={`inline-block p-1.5 rounded-full mr-2 align-middle ${statusStyles(
              character.status
            )}`}
          ></span>
          {character.status}
        </p>
        <p>
          {genderStyles(character.gender)}
          {character.gender}
        </p>
      </div>
    </div>
  );
};
