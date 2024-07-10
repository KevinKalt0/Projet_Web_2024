export const getTime = (): string => {
  return new Date()
    .toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .toLocaleLowerCase();
};
