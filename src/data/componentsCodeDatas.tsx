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
const SearchBar = React.lazy(() => import('../library/search/SearchBar'));
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
    code: [
      `// <InputDefault width={500} />
<InputDefault width={value} />`,
      '',
    ],
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
      `// <InputCount width={500} />
<InputCount width={value} />`,
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
    code: [
      `/* 
  !! check에는 정규표현식만 입력해주세요.
  <InputCheck width={500} check={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/} /> 

  1) 영문 또는 숫자 조합 8자리 이상
  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  2) 영문, 숫자 특수기호 조합 8자리 이상
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,25}$/
  3) 대문자, 소문자, 숫자, 특수기호 조합 8자리 이상
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,25}$/
*/
<InputCheck width={value} check={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <InputCheck width={500} check={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/} />
      </Suspense>
    ),
  },
  {
    id: 4,
    name: 'dropdown_default',
    code: [
      `<DefaultDropdown width={value} list={['옵션 1', '옵션 2', '옵션 3', ...]}/>`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DefaultDropdown width={400} list={['옵션 1', '옵션 2', '옵션 3']} />
      </Suspense>
    ),
  },
  {
    id: 5,
    name: 'search_bar',
    code: [
      `// <SearchBar width={500} />
<SearchBar width={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <SearchBar width={500} />
      </Suspense>
    ),
  },
  {
    id: 6,
    name: 'checkbox_beige',
    code: [
      `// <CheckboxBeige scale={3} />
<CheckboxBeige scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBeige scale={3} />
      </Suspense>
    ),
  },
  {
    id: 7,
    name: 'round_checkbox_beige',
    code: [
      `// <RCheckboxBeige scale={3} />
<RCheckboxBeige scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBeige scale={3} />
      </Suspense>
    ),
  },
  {
    id: 8,
    name: 'checkbox_beige_label',
    code: [
      `// <CheckboxBeigeLabel scale={3} />
<CheckboxBeigeLabel scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBeigeLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 9,
    name: 'round_checkbox_beige_label',
    code: [
      `// <RCheckboxBeigeLabel scale={3} />
<RCheckboxBeigeLabel scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBeigeLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 10,
    name: 'checkbox_red',
    code: [
      `// <CheckboxRed scale={3} />
<CheckboxRed scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxRed scale={3} />
      </Suspense>
    ),
  },
  {
    id: 11,
    name: 'round_checkbox_red',
    code: [
      `// <RCheckboxRed scale={3} />
<RCheckboxRed scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxRed scale={3} />
      </Suspense>
    ),
  },
  {
    id: 12,
    name: 'checkbox_red_label',
    code: [
      `// <CheckboxRedLabel scale={3} />
<CheckboxRedLabel scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxRedLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 13,
    name: 'round_checkbox_red_label',
    code: [
      `// <RCheckboxRedLabel scale={3} />
<RCheckboxRedLabel scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxRedLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 14,
    name: 'checkbox_black',
    code: [
      `// <CheckboxBlack scale={3} />
<CheckboxBlack scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBlack scale={3} />
      </Suspense>
    ),
  },
  {
    id: 15,
    name: 'round_checkbox_black',
    code: [
      `// <RCheckboxBlack scale={3} />
<RCheckboxBlack scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RCheckboxBlack scale={3} />
      </Suspense>
    ),
  },
  {
    id: 16,
    name: 'chceckbox_black_label',
    code: [
      `// <CheckboxBlackLabel scale={3} />
<CheckboxBlackLabel scale={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <CheckboxBlackLabel scale={3} />
      </Suspense>
    ),
  },
  {
    id: 17,
    name: 'round_checkbox_black_label',
    code: [
      `// <RCheckboxBlackLabel scale={3} />
<RCheckboxBlackLabel scale={value} />`,
      '',
    ],
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
    code: [
      `// <DefaultButton size={80} />
<DefaultButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DefaultButton />
      </Suspense>
    ),
  },
  {
    id: 19,
    name: 'button_plus_left',
    code: [
      `// <PlusButton size={115} />
<PlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <PlusButton />
      </Suspense>
    ),
  },
  {
    id: 20,
    name: 'button_plus_right',
    code: [
      `// <RPlusButton size={115} />
<RPlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RPlusButton />
      </Suspense>
    ),
  },
  {
    id: 21,
    name: 'button_outline',
    code: [
      `// <OutLineButton size={80} />
<OutLineButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <OutLineButton />
      </Suspense>
    ),
  },
  {
    id: 22,
    name: 'button_outline_plus_left',
    code: [
      `// <OutLinePlusButton size={115} />
<OutLinePlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <OutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 23,
    name: 'button_outline_plus_right',
    code: [
      `// <ROutLinePlusButton size={115} />
<ROutLinePlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <ROutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 24,
    name: 'button_outline_filled',
    code: [
      `// <FilledOutLineButton size={80} />
<FilledOutLineButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <FilledOutLineButton />
      </Suspense>
    ),
  },
  {
    id: 25,
    name: 'button_outline_filled_plus_left',
    code: [
      `// <FilledOutLinePlusButton size={115} />
<FilledOutLinePlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <FilledOutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 26,
    name: 'button_outline_filled_plus_right',
    code: [
      `// <RFilledOutLinePlusButton size={115} />
<RFilledOutLinePlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RFilledOutLinePlusButton />
      </Suspense>
    ),
  },
  {
    id: 27,
    name: 'button_default_dark',
    code: [
      `// <DarkDefaultButton size={80} />
<DarkDefaultButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DarkDefaultButton />
      </Suspense>
    ),
  },
  {
    id: 28,
    name: 'button_plus_left_dark',
    code: [
      `// <DarkPlusButton size={115} />
<DarkPlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DarkPlusButton />
      </Suspense>
    ),
  },
  {
    id: 29,
    name: 'button_plus_right_dark',
    code: [
      `// <RDarkPlusButton size={115} />
<RDarkPlusButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <RDarkPlusButton />
      </Suspense>
    ),
  },
  {
    id: 30,
    name: 'button_outline_disable',
    code: [
      `// <DisableOutLineButton size={80} />
<DisableOutLineButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableOutLineButton />
      </Suspense>
    ),
  },
  {
    id: 31,
    name: 'button_disable',
    code: [
      `// <DisableButton size={80} />
<DisableButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableButton />
      </Suspense>
    ),
  },
  {
    id: 32,
    name: 'button_filled_disable',
    code: [
      `// <DisableFilledButton size={80} />
<DisableFilledButton size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <DisableFilledButton />
      </Suspense>
    ),
  },
  {
    id: 33,
    name: 'toggle_aos',
    code: [
      `// <AosToggle size={40} /> />
<AosToggle size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <AosToggle />
      </Suspense>
    ),
  },
  {
    id: 34,
    name: 'toggle_ios',
    code: [
      `// <IosToggle size={40} /> />
<IosToggle size={value} />`,
      '',
    ],
    component: (
      <Suspense fallback={renderLoader()}>
        <IosToggle />
      </Suspense>
    ),
  },
];

export default codeData;
