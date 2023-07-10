import { useState } from 'react';
import { useParticipantsList } from '../state/hooks/useParticipantsList';
import { useResultRaffle } from '../state/hooks/useResultRaffle';

const Raffle = () => {
  const participants = useParticipantsList();
  const [currParticipant, setCurrParticipant] = useState('');
  const [secretFriend, setSecretFriend] = useState('');
  const result = useResultRaffle();

  const raffle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result.has(currParticipant)) {
      setSecretFriend(result.get(currParticipant)!);
    }
  };

  return (
    <section>
      <form onSubmit={raffle}>
        <select
          required
          name="currParticipant"
          id="currParticipant"
          placeholder="Selecione o seu nome"
          value={currParticipant}
          onChange={e => setCurrParticipant(e.target.value)}
        >
          {participants.map(participant => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {secretFriend && <p role='alert'>{secretFriend}</p>}
    </section>
  );
};

export default Raffle;
