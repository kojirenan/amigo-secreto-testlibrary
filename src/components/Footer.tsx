import { useNavigate } from 'react-router-dom';
import { useParticipantsList } from '../state/hooks/useParticipantsList';
import { useRaffle } from '../state/hooks/useRaffle';

const Footer = () => {
  const participants = useParticipantsList();
  const navigate = useNavigate();
  const raffle = useRaffle();

  const initJoke = () => {
    raffle();
    navigate('/sorteio');
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={initJoke}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
