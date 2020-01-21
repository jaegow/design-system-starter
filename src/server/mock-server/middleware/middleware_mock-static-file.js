// import path from 'path';
// import fs from 'fs-extra';
// import { getMockFileFromUrl } from '../helpers';
//
// export const loadMockFile = async (req, res, next) => {
//   try {
//     const { url } = req;
//     console.log('useMockFile()', { url });
//
//     const mock_file_name = getMockFileFromUrl(url);
//     const mock_file_path = path.join(static_path, mock_file_name);
//     const mock_file_data = await fs.readFileSync(mock_file_path);
//     const mock_file_json = JSON.parse(mock_file_data);
//
//     // res.send({ link: base64_link, fileName: `${file_name}.pdf` });
//     // return res.end();
//   } catch (err) {
//     console.error('useMockFile()', err);
//     return res.status(500).json({
//       errors: err,
//     });
//   }
// };
