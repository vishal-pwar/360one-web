import { getOurIpsSection } from "@/services/perspective";

export default async function index() {
  const response = await getOurIpsSection();
  return <section className="mt-20"></section>;
}
