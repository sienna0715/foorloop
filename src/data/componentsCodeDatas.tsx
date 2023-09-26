// input
import InputDefault from '../library/input/InputDefault';
import InputCount from '../library/input/InputCount';
import InputCheck from '../library/input/InputCheck';
// dropdown
import DefaultDropdown from '../library/dropdown/DefaultDropdown';
// search
import Search from '../library/search/Search';

const codeData = [
  {
    name: 'input_default',
    code: [
      `<InputWrap width={width}>
    <InputContainer>
      <Label>아이디</Label>
      <Input
        type="text"
        placeholder="id"
        value={value}
        onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        color={color}
      />
    </InputContainer>
    {isFocus && count !== 0 && (
      <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
    )}
  </InputWrap>`,
      '메롱',
    ],
    component: <InputDefault width={450} color="black" />,
  },
  {
    name: 'input_count',
    code: ['', ''],
    component: <InputCount width={450} color="black" />,
  },
  {
    name: 'input_check',
    code: ['', ''],
    component: <InputCheck width={450} color="black" />,
  },
  {
    name: 'dropdown_default',
    code: ['', ''],
    component: (
      <DefaultDropdown
        width={300}
        list={['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5']}
      />
    ),
  },
  {
    name: 'search_bar',
    code: ['', ''],
    component: <Search width={500} color="black" />,
  },
  {
    name: 'checkbox_beige',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_beige',
    code: ['', ''],
  },
  {
    name: 'checkbox_beige_label',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_beige_label',
    code: ['', ''],
  },
  {
    name: 'checkbox_red',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_red',
    code: ['', ''],
  },
  {
    name: 'checkbox_red_label',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_red_label',
    code: ['', ''],
  },
  {
    name: 'checkbox_black',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_black',
    code: ['', ''],
  },
  {
    name: 'chceckbox_black_label',
    code: ['', ''],
  },
  {
    name: 'round_checkbox_black_label',
    code: ['', ''],
  },
  {
    name: 'button_default',
    code: ['', ''],
  },
  {
    name: 'button_outline_filled',
    code: ['', ''],
  },
  {
    name: 'button_outline',
    code: ['', ''],
  },
  {
    name: 'button_plus_left',
    code: ['', ''],
  },
  {
    name: 'button_plus_right',
    code: ['', ''],
  },
  {
    name: 'button_outline_filled_plus_left',
    code: ['', ''],
  },
  {
    name: 'button_outline_filled_plus_right',
    code: ['', ''],
  },
  {
    name: 'button_outline_plus_left',
    code: ['', ''],
  },
  {
    name: 'button_outline_plus_right',
    code: ['', ''],
  },
  {
    name: 'button_default_dark',
    code: ['', ''],
  },
  {
    name: 'button_plus_left_dark',
    code: ['', ''],
  },
  {
    name: 'button_plus_right_dark',
    code: ['', ''],
  },
  {
    name: 'button_disable',
    code: ['', ''],
  },
  {
    name: 'button_filled_disable',
    code: ['', ''],
  },
  {
    name: 'button_outline_disable',
    code: ['', ''],
  },
  {
    name: 'toggle_aos',
    code: ['', ''],
  },
  {
    name: 'toggle_ios',
    code: ['', ''],
  },
];

export default codeData;
