import path from 'path';
import fs from 'fs-extra';

// eslint-disable-next-line import/prefer-default-export
export const getMockFileFromUrl = (url) => {
  const parts = url.split('/').filter((part) => part && part.length);
  return `${parts.join('.')}.json`;
};

export const loadMockJsonFile = async ({ apiUrl, fileRoot }) => {
  try {
    const mock_file_name = getMockFileFromUrl(apiUrl);
    const mock_file_path = path.join(fileRoot, mock_file_name);
    const mock_file_data = await fs.readFileSync(mock_file_path);
    const mock_file_json = JSON.parse(mock_file_data);
    return mock_file_json;
  } catch (err) {
    console.error('loadMockFile()', err);
    return err;
  }
};
