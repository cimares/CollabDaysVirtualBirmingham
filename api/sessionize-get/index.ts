import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as NodeCache from 'node-cache';
import fetch from 'node-fetch';
import { Sessions, Speakers } from "../models";

const fncCache = new NodeCache();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  const apiUrl = req.body && req.body["apiUrl"] ? req.body["apiUrl"] : null;
  if (!apiUrl) {
    context.res = {
      body: `'apiUrl' property not provided`,
      status: 400
    };
    return;
  }
  
  const cacheKey = `api:data:${apiUrl}`;
  const cachedData = fncCache.get<Sessions | Speakers | undefined>(cacheKey);
  if (cachedData) {
    context.res = {
      body: cachedData
    };
    return;
  }

  const dataReq = await fetch(apiUrl);
  if (dataReq && dataReq.ok) {
    const data = await dataReq.json();
    // Cache for two minutes
    fncCache.set(cacheKey, data, 120);
    context.res = {
      body: data
    };
    return;
  }
  
  context.res = {
    body: null
  };
};

export default httpTrigger;