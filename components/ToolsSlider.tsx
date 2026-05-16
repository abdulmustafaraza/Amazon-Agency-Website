const tools = [
  "Amazon Marketplace",
  "Helium 10",
  "Jungle Scout",
  "SellerAmp",
  "Shopify",
  "Google Sheets",
  "AI Content Workflows",
  "Chatbot Flows",
  "Creative Direction",
  "PPC Testing",
  "Marketplace Research",
  "Product Positioning",
  "Social Content Systems",
];

export default function ToolsSlider() {
  const marqueeItems = [...tools, ...tools];

  return (
    <section className="tools-slider" aria-label="Tools and workflows">
      <div className="site-container tools-slider-inner">
        <p className="tools-slider-label">Tools &amp; Workflows</p>
        <div className="tools-slider-track-wrap">
          <div className="tools-slider-track">
            {marqueeItems.map((tool, index) => (
              <span className="tool-pill" key={`${tool}-${index}`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
