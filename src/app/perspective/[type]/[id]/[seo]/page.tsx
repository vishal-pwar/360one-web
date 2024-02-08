import Footer from "@/components/footer";
import Header from "@/components/header";
import PerspectiveArticlePage from "@/sections/perspective/article";

export default function PerspectiveArticle({
  params,
  searchParams,
}: {
  params: { type: string; id: string };
  searchParams: { from: string };
}) {
  return (
    <div className="mt-16">
      <Header />
      <PerspectiveArticlePage params={params} searchParams={searchParams} />
      <Footer />
    </div>
  );
}
