export const getResponse = (data) => {
  return () => ({
    code: '0000',
    message: 'OK',
    data
  })
}