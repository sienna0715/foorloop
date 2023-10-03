import { styled } from 'styled-components';
import MainComponentItem from './MainComponentItem';
import PlusButton from '../../library/button/PlusButton';
import DefaultDropdown from '../../library/dropdown/DefaultDropdown';
import CheckboxRedLabel from '../../library/checkbox/label/CheckboxRedLabel';
import IosToggle from '../../library/toggle/IosToggle';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1439px) {
    justify-content: center;
  }
`;

function MainComponentItems() {
  const datas = [
    { title: 'checkbox', component: <CheckboxRedLabel scale={1.5} /> },
    { title: 'button', component: <PlusButton /> },
    { title: 'toggle', component: <IosToggle /> },
    {
      title: 'dropdown',
      component: (
        <DefaultDropdown
          width={200}
          list={['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5']}
        />
      ),
    },
  ];
  return (
    <Container>
      {datas.map((data) => {
        return (
          <MainComponentItem key={data.title} title={data.title}>
            {data.component}
          </MainComponentItem>
        );
      })}
    </Container>
  );
}

export default MainComponentItems;
