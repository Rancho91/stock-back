import { Router } from "express";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const PATH_ROUTER = `${__dirname}`;

const router = Router();
const cleanFileName = (fileName: string) => {
  const cleanName = fileName.split(".").shift();
  return cleanName;
};

const archivos = readdirSync(PATH_ROUTER).filter((fileName) => {
  const filePath = join(PATH_ROUTER, fileName);
  const stats = statSync(filePath);
  return stats.isFile() && fileName !== "index.js";
});
archivos.filter(async (fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    if (cleanName !== "router") {
      const moduleRouter = await import(`./${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    }
  }
});

export { router };
