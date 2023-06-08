module.exports = (schaema) => (input) => {
  const { value, error } = schaema.validate(input);
  if (error) {
    throw error;
  }
  return value;
};
