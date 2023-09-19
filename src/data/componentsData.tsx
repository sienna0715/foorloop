// input
import InputDefault from '../library/input/InputDefault';
import InputCount from '../library/input/InputCount';
import InputCheck from '../library/input/InputCheck';
// dropdown
import DefaultDropdown from '../library/dropdown/DefaultDropdown';
// checkbox
import CheckboxBeige from '../library/checkbox/CheckboxBeige';
import CheckboxBlack from '../library/checkbox/CheckboxBlack';
import CheckboxRed from '../library/checkbox/CheckboxRed';
import RCheckboxBeige from '../library/checkbox/RCheckboxBeige';
import RCheckboxBlack from '../library/checkbox/RCheckboxBlack';
import RCheckboxRed from '../library/checkbox/RCheckboxRed';
import CheckboxBeigeLabel from '../library/checkbox/label/CheckboxBeigeLabel';
import CheckboxBlackLabel from '../library/checkbox/label/CheckboxBlackLabel';
import CheckboxRedLabel from '../library/checkbox/label/CheckboxRedLabel';
import RCheckboxBeigeLabel from '../library/checkbox/label/RCheckboxBeigeLabel';
import RCheckboxBlackLabel from '../library/checkbox/label/RCheckboxBlackLabel';
import RCheckboxRedLabel from '../library/checkbox/label/RCheckboxRedLabel';
// button
import DefaultButton from '../library/button/DefaultButton';
import FilledOutLineButton from '../library/button/FilledOutLineButton';
import OutLineButton from '../library/button/OutLineButton';
import DarkDefaultButton from '../library/button/DarkDefaultButton';
import PlusButton from '../library/button/PlusButton';
import RPlusButton from '../library/button/RPlusButton';
import FilledOutLinePlusButton from '../library/button/FilledOutLinePlusButton';
import RFilledOutLinePlusButton from '../library/button/RFilledOutLinePlusButton';
import OutLinePlusButton from '../library/button/OutLinePlusButton';
import ROutLinePlusButton from '../library/button/ROutLinePlusButton';
import DarkPlusButton from '../library/button/DarkPlusButton';
import RDarkPlusButton from '../library/button/RDarkPlusButton';
import DisableButton from '../library/button/DisableButton';
import DisableFilledButton from '../library/button/DisableFilledButton';
import DisableOutLineButton from '../library/button/DisableOutLineButton';
// search
import Search from '../library/search/Search';
// toggle
import AosToggle from '../library/toggle/AosToggle';
import IosToggle from '../library/toggle/IosToggle';

const componentsData = {
  name: ['Input', 'Dropdown', 'Checkbox', 'Button', 'Search', 'Toggle'],
  inputs: [
    {
      id: 1,
      name: 'inputDefault',
      component: <InputDefault width={300} color="white" />,
    },
    {
      id: 2,
      name: 'Input',
      component: <InputCount width={300} color="white" />,
    },
    {
      id: 3,
      name: 'Input',
      component: <InputCheck width={300} color="white" />,
    },
  ],
  dropdowns: [
    {
      id: 4,
      name: 'Dropdown',
      component: (
        <DefaultDropdown
          width={300}
          list={['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5']}
        />
      ),
    },
  ],
  checkboxs: [
    {
      id: 5,
      name: 'Checkbox',
      component: <CheckboxBeige />,
    },
    {
      id: 8,
      name: 'Checkbox',
      component: <RCheckboxBeige />,
    },
    {
      id: 11,
      name: 'Checkbox',
      component: <CheckboxBeigeLabel />,
    },
    {
      id: 14,
      name: 'Checkbox',
      component: <RCheckboxBeigeLabel />,
    },
    {
      id: 7,
      name: 'Checkbox',
      component: <CheckboxRed />,
    },
    {
      id: 10,
      name: 'Checkbox',
      component: <RCheckboxRed />,
    },
    {
      id: 13,
      name: 'Checkbox',
      component: <CheckboxRedLabel />,
    },
    {
      id: 16,
      name: 'Checkbox',
      component: <RCheckboxRedLabel />,
    },
  ],
  darkCheckboxs: [
    {
      id: 6,
      name: 'Checkbox',
      component: <CheckboxBlack />,
    },
    {
      id: 9,
      name: 'Checkbox',
      component: <RCheckboxBlack />,
    },
    {
      id: 12,
      name: 'Checkbox',
      component: <CheckboxBlackLabel />,
    },
    {
      id: 15,
      name: 'Checkbox',
      component: <RCheckboxBlackLabel />,
    },
  ],
  buttons: [
    {
      id: 17,
      name: 'Button',
      component: <DefaultButton />,
    },
    {
      id: 18,
      name: 'Button',
      component: <FilledOutLineButton />,
    },
    {
      id: 19,
      name: 'Button',
      component: <OutLineButton />,
    },
    {
      id: 21,
      name: 'Button',
      component: <PlusButton />,
    },
    {
      id: 22,
      name: 'Button',
      component: <RPlusButton />,
    },
    {
      id: 23,
      name: 'Button',
      component: <FilledOutLinePlusButton />,
    },
    {
      id: 24,
      name: 'Button',
      component: <RFilledOutLinePlusButton />,
    },
    {
      id: 25,
      name: 'Button',
      component: <OutLinePlusButton />,
    },
    {
      id: 26,
      name: 'Button',
      component: <ROutLinePlusButton />,
    },
    {
      id: 27,
      name: 'Button',
      component: <DarkPlusButton />,
    },
    {
      id: 28,
      name: 'Button',
      component: <RDarkPlusButton />,
    },
    {
      id: 29,
      name: 'Button',
      component: <DisableButton />,
    },
    {
      id: 30,
      name: 'Button',
      component: <DisableFilledButton />,
    },
    {
      id: 31,
      name: 'Button',
      component: <DisableOutLineButton />,
    },
  ],
  darkButtons: [
    {
      id: 20,
      name: 'Button',
      component: <DarkDefaultButton />,
    },
  ],
  searchs: [
    {
      id: 32,
      name: 'Search',
      component: <Search width={300} color="white" />,
    },
  ],
  toggles: [
    {
      id: 33,
      name: 'Toggle',
      component: <AosToggle />,
    },
    {
      id: 34,
      name: 'Toggle',
      component: <IosToggle />,
    },
  ],
};

export default componentsData;
