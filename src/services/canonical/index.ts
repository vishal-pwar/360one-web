import { fetchContent } from "@/utils/fetch-content";

export async function getCanonical() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/canonical`;
  const urlParamsObject = {
    populate: ["address", "contactPoint"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

// export async function getAddress() {
//   const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
//   const path = `/canonical`;
//   const urlParamsObject = {
//     populate: {
//       address: {},
//     },
//   };

//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const response = await fetchContent(path, urlParamsObject, options);
//   return response;
// }
// export async function getContactPoints() {
//   const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
//   const path = `/canonical`;
//   const urlParamsObject = {
//     populate: {
//       contactPoint: {},
//     },
//   };

//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const response = await fetchContent(path, urlParamsObject, options);
//   return response;
// }
