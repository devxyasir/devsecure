// This file can be removed as we're not using uploadthing
export const useUploadThing = () => {
  return {
    startUpload: async () => {
      console.warn('File upload not implemented');
      return null;
    }
  };
};
