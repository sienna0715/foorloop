import React, { Suspense } from 'react';
// input
const InputDefault = React.lazy(() => import('../library/input/InputDefault'));
const InputCount = React.lazy(() => import('../library/input/InputCount'));
const InputCheck = React.lazy(() => import('../library/input/InputCheck'));
// dropdown
const DefaultDropdown = React.lazy(
  () => import('../library/dropdown/DefaultDropdown'),
);
// search
const Search = React.lazy(() => import('../library/search/Search'));
// checkbox
const CheckboxBeige = React.lazy(
  () => import('../library/checkbox/CheckboxBeige'),
);
const CheckboxBlack = React.lazy(
  () => import('../library/checkbox/CheckboxBlack'),
);
const CheckboxRed = React.lazy(() => import('../library/checkbox/CheckboxRed'));
const RCheckboxBeige = React.lazy(
  () => import('../library/checkbox/RCheckboxBeige'),
);
const RCheckboxBlack = React.lazy(
  () => import('../library/checkbox/RCheckboxBlack'),
);
const RCheckboxRed = React.lazy(
  () => import('../library/checkbox/RCheckboxRed'),
);
const CheckboxBeigeLabel = React.lazy(
  () => import('../library/checkbox/label/CheckboxBeigeLabel'),
);
const CheckboxBlackLabel = React.lazy(
  () => import('../library/checkbox/label/CheckboxBlackLabel'),
);
const CheckboxRedLabel = React.lazy(
  () => import('../library/checkbox/label/CheckboxRedLabel'),
);
const RCheckboxBeigeLabel = React.lazy(
  () => import('../library/checkbox/label/RCheckboxBeigeLabel'),
);
const RCheckboxBlackLabel = React.lazy(
  () => import('../library/checkbox/label/RCheckboxBlackLabel'),
);
const RCheckboxRedLabel = React.lazy(
  () => import('../library/checkbox/label/RCheckboxRedLabel'),
);
// button
const DefaultButton = React.lazy(
  () => import('../library/button/DefaultButton'),
);
const FilledOutLineButton = React.lazy(
  () => import('../library/button/FilledOutLineButton'),
);
const OutLineButton = React.lazy(
  () => import('../library/button/OutLineButton'),
);
const DarkDefaultButton = React.lazy(
  () => import('../library/button/DarkDefaultButton'),
);
const PlusButton = React.lazy(() => import('../library/button/PlusButton'));
const RPlusButton = React.lazy(() => import('../library/button/RPlusButton'));
const FilledOutLinePlusButton = React.lazy(
  () => import('../library/button/FilledOutLinePlusButton'),
);
const RFilledOutLinePlusButton = React.lazy(
  () => import('../library/button/RFilledOutLinePlusButton'),
);
const OutLinePlusButton = React.lazy(
  () => import('../library/button/OutLinePlusButton'),
);
const ROutLinePlusButton = React.lazy(
  () => import('../library/button/ROutLinePlusButton'),
);
const DarkPlusButton = React.lazy(
  () => import('../library/button/DarkPlusButton'),
);
const RDarkPlusButton = React.lazy(
  () => import('../library/button/RDarkPlusButton'),
);
const DisableButton = React.lazy(
  () => import('../library/button/DisableButton'),
);
const DisableFilledButton = React.lazy(
  () => import('../library/button/DisableFilledButton'),
);
const DisableOutLineButton = React.lazy(
  () => import('../library/button/DisableOutLineButton'),
);
// toggle
const AosToggle = React.lazy(() => import('../library/toggle/AosToggle'));
const IosToggle = React.lazy(() => import('../library/toggle/IosToggle'));
// loding
const Loading = React.lazy(() => import('../components/Loading'));
const renderLoader = () => <Loading />;

const codeData = [
  {
    id: 1,
    name: 'input_default',
    code: [`<InputDefault width={450} color="black" />`, '메롱'],
    component: (
      <Suspense fallback={renderLoader()}>
        <InputDefault width={500} />
      </Suspense>
    ),
  },
  {
    id: 2,
    name: 'input_count',
    code: [
      `interface IInputCountProps {
      width: number;
    }
    
    export default function InputCount({ width = 400 }: IInputCountProps) {
      const [value, setValue] = useState('');
      const [isFocus, setIsFocus] = useState(false);
      const count = value.length;
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
    
      return (
        <InputWrap width={width}>
          <InputContainer>
            <Label>아이디</Label>
            <Input
              type="text"
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={handleChange}
            />
          </InputContainer>
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
          )}
          <TextLength>{count}/50</TextLength>
        </InputWrap>
      );
    }`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <InputCount width={500} />
      </Suspense>
    ),
  },
  {
    id: 3,
    name: 'input_check',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <InputCheck width={500} />
      </Suspense>
    ),
  },
  {
    id: 4,
    name: 'dropdown_default',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DefaultDropdown
          width={400}
          list={['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5']}
        />
      </Suspense>
    ),
  },
  {
    id: 5,
    name: 'search_bar',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <Search width={500} />
      </Suspense>
    ),
  },
  {
    id: 6,
    name: 'checkbox_beige',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBeige scale={3} />
      </Suspense>
    ),
  },
  {
    id: 7,
    name: 'round_checkbox_beige',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBeige scale={3} />
      </Suspense>
    ),
  },
  {
    id: 8,
    name: 'checkbox_beige_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBeigeLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 9,
    name: 'round_checkbox_beige_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBeigeLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 10,
    name: 'checkbox_red',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxRed scale={3} />
      </Suspense>
    ),
  },
  {
    id: 11,
    name: 'round_checkbox_red',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxRed scale={3} />
      </Suspense>
    ),
  },
  {
    id: 12,
    name: 'checkbox_red_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxRedLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 13,
    name: 'round_checkbox_red_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxRedLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 14,
    name: 'checkbox_black',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBlack scale={3} />
      </Suspense>
    ),
  },
  {
    id: 15,
    name: 'round_checkbox_black',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBlack scale={3} />
      </Suspense>
    ),
  },
  {
    id: 16,
    name: 'chceckbox_black_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBlackLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 17,
    name: 'round_checkbox_black_label',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBlackLabel scale={3} />
      </Suspense>
    ),
  },
  // button
  {
    id: 18,
    name: 'button_default',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DefaultButton />
      </Suspense>
    ),
  },
  {
    id: 19,
    name: 'button_plus_left',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <PlusButton />
      </Suspense>
    ),
  },
  {
    id: 20,
    name: 'button_plus_right',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RPlusButton />
      </Suspense>
    ),
  },
  {
    id: 21,
    name: 'button_outline',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <OutLineButton />
      </Suspense>
    ),
  },
  {
    id: 22,
    name: 'button_outline_plus_left',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <OutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 23,
    name: 'button_outline_plus_right',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <ROutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 24,
    name: 'button_outline_filled',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <FilledOutLineButton />
      </Suspense>
    ),
  },
  {
    id: 25,
    name: 'button_outline_filled_plus_left',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <FilledOutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 26,
    name: 'button_outline_filled_plus_right',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RFilledOutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 27,
    name: 'button_default_dark',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DarkDefaultButton />
      </Suspense>
    ),
  },
  {
    id: 28,
    name: 'button_plus_left_dark',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DarkPlusButton />
      </Suspense>
    ),
  },
  {
    id: 29,
    name: 'button_plus_right_dark',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <RDarkPlusButton />
      </Suspense>
    ),
  },
  {
    id: 30,
    name: 'button_outline_disable',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableOutLineButton />
      </Suspense>
    ),
  },
  {
    id: 31,
    name: 'button_disable',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableButton />
      </Suspense>
    ),
  },
  {
    id: 32,
    name: 'button_filled_disable',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableFilledButton />
      </Suspense>
    ),
  },
  {
    id: 33,
    name: 'toggle_aos',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <AosToggle />
      </Suspense>
    ),
  },
  {
    id: 34,
    name: 'toggle_ios',
    code: ['', ''],
    component: (
      <Suspense fallback={renderLoader()}>
        <IosToggle />
      </Suspense>
    ),
  },
];

export default codeData;
