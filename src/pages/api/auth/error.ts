import { NextApiHandler } from 'next';

const Error: NextApiHandler = async (req, res) => {
  console.log('==> Error (req, res)');
  console.log(`===>>> req - method:${req.method} url:${req.url}`);
  console.log('===>>> req: query >>>>>>>>');
  console.log(req.query);
  console.log('===>>> req: body >>>>>>>>');
  console.log(req.body);

  const errorQuery = encodeURI(decodeURI(req.query.error.toString()));
  const redirectUrl = `/loginout?error=${errorQuery}`;

  console.log('===>>> Redirect >>>>>>>>');
  console.log(redirectUrl);

  return res.redirect(redirectUrl);
};

export default Error;
