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
      id: 0,
      name: 'input_default',
      component: <InputDefault width={300} color="white" />,
    },
    {
      id: 1,
      name: 'input_count',
      component: <InputCount width={300} color="white" />,
    },
    {
      id: 2,
      name: 'input_check',
      component: <InputCheck width={300} color="white" />,
    },
  ],
  dropdowns: [
    {
      id: 3,
      name: 'dropdown_default',
      component: (
        <DefaultDropdown
          width={300}
          list={['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5']}
        />
      ),
    },
  ],
  searchs: [
    {
      id: 4,
      name: 'search_bar',
      component: <Search width={500} color="black" />,
    },
  ],
  checkboxs: [
    {
      id: 5,
      name: 'checkbox_beige',
      component: <CheckboxBeige />,
    },
    {
      id: 6,
      name: 'round_checkbox_beige',
      component: <RCheckboxBeige />,
    },
    {
      id: 7,
      name: 'checkbox_beige_label',
      component: <CheckboxBeigeLabel />,
    },
    {
      id: 8,
      name: 'round_checkbox_beige_label',
      component: <RCheckboxBeigeLabel />,
    },
    {
      id: 9,
      name: 'checkbox_red',
      component: <CheckboxRed />,
    },
    {
      id: 10,
      name: 'round_checkbox_red',
      component: <RCheckboxRed />,
    },
    {
      id: 11,
      name: 'checkbox_red_label',
      component: <CheckboxRedLabel />,
    },
    {
      id: 12,
      name: 'round_checkbox_red_label',
      component: <RCheckboxRedLabel />,
    },
  ],
  darkCheckboxs: [
    {
      id: 13,
      name: 'checkbox_black',
      component: <CheckboxBlack />,
    },
    {
      id: 14,
      name: 'round_checkbox_black',
      component: <RCheckboxBlack />,
    },
    {
      id: 15,
      name: 'chceckbox_black_label',
      component: <CheckboxBlackLabel />,
    },
    {
      id: 16,
      name: 'round_checkbox_black_label',
      component: <RCheckboxBlackLabel />,
    },
  ],
  buttons: [
    {
      id: 17,
      name: 'button_default',
      component: <DefaultButton />,
    },
    {
      id: 18,
      name: 'button_plus_left',
      component: <PlusButton />,
    },
    {
      id: 19,
      name: 'button_plus_right',
      component: <RPlusButton />,
    },
    {
      id: 20,
      name: 'button_outline',
      component: <OutLineButton />,
    },
    {
      id: 21,
      name: 'button_outline_plus_left',
      component: <OutLinePlusButton />,
    },
    {
      id: 22,
      name: 'button_outline_plus_right',
      component: <ROutLinePlusButton />,
    },
  ],
  darkButtons: [
    {
      id: 23,
      name: 'button_outline_filled',
      component: <FilledOutLineButton />,
    },
    {
      id: 24,
      name: 'button_outline_filled_plus_left',
      component: <FilledOutLinePlusButton />,
    },
    {
      id: 25,
      name: 'button_outline_filled_plus_right',
      component: <RFilledOutLinePlusButton />,
    },
    {
      id: 26,
      name: 'button_default_dark',
      component: <DarkDefaultButton />,
    },
    {
      id: 27,
      name: 'button_plus_left_dark',
      component: <DarkPlusButton />,
    },
    {
      id: 28,
      name: 'button_plus_right_dark',
      component: <RDarkPlusButton />,
    },
  ],
  disableButton: [
    {
      id: 29,
      name: 'button_disable',
      component: <DisableButton />,
    },
    {
      id: 30,
      name: 'button_filled_disable',
      component: <DisableFilledButton />,
    },
    {
      id: 31,
      name: 'button_outline_disable',
      component: <DisableOutLineButton />,
    },
  ],
  toggles: [
    {
      id: 32,
      name: 'toggle_aos',
      component: <AosToggle />,
    },
    {
      id: 33,
      name: 'toggle_ios',
      component: <IosToggle />,
    },
  ],
};

export default componentsData;
