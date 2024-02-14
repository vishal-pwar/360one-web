import Footer from "@/components/footer";
import Header from "@/components/header";
import ArticlePost from "@/components/perspective-article";
import { getArticle } from "@/services/perspective/article";

export default async function PerspectiveArticle({
  params,
}: {
  params: { type: string; id: string };
}) {
  const response = await getArticle(params.id);

  return (
    <div className="mt-16">
      <Header />
      <ArticlePost response={response?.data} />
      <Footer />
    </div>
  );
}
