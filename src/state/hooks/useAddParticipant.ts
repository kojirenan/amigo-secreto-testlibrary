import { useRecoilState, useSetRecoilState } from 'recoil';
import { errorState, participantsList } from '../atom';

export const useAddParticipant = () => {
  const [list, setList] = useRecoilState(participantsList);
  const setError = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    return setList(prevList => [...prevList, participantName]);
  };
};
