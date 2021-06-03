import { NextApiRequest, NextApiResponse } from "next";
import animes from "../../server/animes";

export default (request: NextApiRequest, response: NextApiResponse) => {
  return response.json(animes);  
}