// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

// Create new instnace of prisma client
const prisma = new PrismaClient();

type Data = {
  message: object | string | number | string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." });
  }

  // const request = JSON.parse(req.body);
  const request = req.body;

  const createdContact = await prisma.contact.create({
    data: request,
  });

  res.status(200).json({
    message: createdContact,
  });
}
