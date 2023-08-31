import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function MainIconList() {
  const [page, setPage] = useState<number>(2);
  const [data, setData] = useState<string[]>([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]);
  const [prevDatas, setPrevDatas] = useState<string[]>([]);
  const [selectDatas, setSelectDatas] = useState('');
  const [nextDatas, setNextDatas] = useState<string[]>([]);

  useEffect(() => {
    const pre = data.slice(page - 4);

    if (pre.length < 4) {
      pre.push(...data.slice(0, 4 - pre.length));
    }

    setPrevDatas(pre);

    setSelectDatas(data[page]);

    const next = data.slice(page + 1, page + 5);

    if (next.length < 4) {
      next.push(...data.slice(0, 4 - next.length));
    }

    setNextDatas(next);
  }, [data, page]);

  console.log(prevDatas, selectDatas, nextDatas);

  return <Container>올라</Container>;
}

export default MainIconList;
