export const generateRequest = (params: { [key: string]: any }) => {
    return JSON.stringify(params);
  };