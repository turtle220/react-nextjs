import * as Joi from '@hapi/joi'

// This is the JOI validation schema, you define
// all the validation logic in here, then run
// the validation during the request lifecycle.
// If you prefer to use your own way of validating the 
// incoming data, you can use it.
// const schema = Joi.object<import('../../types').Matrix>({

// })

const fs = require('fs-extra');

export default async (req: import('next').NextApiRequest, res: import('next').NextApiResponse) => {
  const file = 'public/pricing.json';
  fs.outputJson(file, req.body)
  .then(() => fs.readJson(file))
  .then(data => {
    console.log(data);
    res.json();
  })
  .catch(err => {
    console.error(err)
  })
}