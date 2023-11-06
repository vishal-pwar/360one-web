import Download from "@/components/downloads";
import { getDownloads } from "@/services/downloads";
import Headers from "@/components/header";

export default async function Downloads() {
  const res = await getDownloads();
  return (
    <div className="bg-[#f7f5f5] m-4">
      <Headers />
      <Download res={res} />
    </div>
  );
}
