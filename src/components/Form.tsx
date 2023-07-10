import { useRef, useState } from 'react';
import { useAddParticipant } from '../state/hooks/useAddParticipant';
import { useMsgError } from '../state/hooks/useMsgError';

const Form = () => {
  const [name, setName] = useState('');
  const addOnList = useAddParticipant();
  const inputRef = useRef<HTMLInputElement>(null);
  const msgError = useMsgError();

  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addOnList(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form
      className="flex flex-col gap-y-2 max-lg:items-center px-2 text-sm lg:text-base lg:flex-row lg:justify-center"
      onSubmit={addParticipant}
    >
      <input
        className="w-80 h-12 bg-white ps-8 shadow-lg max-lg:rounded-full border border-black lg:rounded-l-full focus:outline-orange-500 hover:border-orange-500"
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <button
        className="w-40 h-12 bg-stone-300 max-lg:rounded-full shadow-lg border border-black cursor-pointer lg:rounded-r-full hover:brightness-75 duration-150"
        disabled={!name}
      >
        Adicionar
      </button>
      {msgError && <p role="alert">{msgError}</p>}
    </form>
  );
};

export default Form;
