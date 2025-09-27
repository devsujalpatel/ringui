import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// Arrays to categorize components
const CENTERED_COMPONENTS = [
  "alert",
  "ai-input",
  "button",
  "card",
  "faq",
  "input",
  "list",
  "pricing",
  "profile",
  "text",
  "checkout",
  "particle-button",
  "currency-transfer",
  "hand-written-title",
  "tweet-card",
  "action-search-bar",
  "blocks/ai-card-generation",
  "vercel-v0-chat",
  // Add more small components here
];


export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();

  const componentName = slug.join("/");

  try {
    const Component = dynamic(
      () =>
        import(`@/components/ringui/${componentName}`).catch(() => notFound()),
      { ssr: true },
    );

    // Check if component should be centered
    const shouldCenter = CENTERED_COMPONENTS.some((component) =>
      componentName.startsWith(component),
    );

    return shouldCenter ? (
      <div className="flex min-h-screen items-center justify-center">
        <Component />
      </div>
    ) : (
      <Component />
    );
  } catch (error) {
    console.error("Error loading component:", error);
    return notFound();
  }
}
