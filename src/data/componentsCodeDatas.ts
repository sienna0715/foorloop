const codeData = {
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
  ],
};

export default codeData;
