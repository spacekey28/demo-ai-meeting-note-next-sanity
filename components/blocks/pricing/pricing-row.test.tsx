import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PricingRow from "./pricing-row";

describe("PricingRow", () => {
  const tiers = [
    {
      _id: "starter",
      title: "Starter",
      subtitle: "For individuals shipping ideas",
      badge: "Best value",
      description: "Capture and summarize every meeting without manual notes.",
      status: "active" as const,
      price: {
        amount: 29,
        currency: "USD",
        billingCycle: "monthly" as const,
      },
      features: [
        "AI summaries from transcripts",
        "Action items and key decisions",
        "Export-friendly structured output",
      ],
      cta: {
        _key: "cta-starter",
        _type: "link",
        title: "Try the AI demo",
        href: "/ai-demo",
        target: false,
        isExternal: false,
        buttonVariant: "default",
      },
    },
    {
      _id: "team",
      title: "Team",
      subtitle: "Shared workspace concept",
      badge: "Most popular",
      description: "Shows CMS-managed team-oriented pricing copy.",
      status: "coming-soon" as const,
      price: {
        amount: 79,
        currency: "USD",
        billingCycle: "monthly" as const,
      },
      features: [
        "Shared workspace concept",
        "CMS-managed marketing content",
        "Team-oriented pricing layout",
      ],
      cta: {
        _key: "cta-team",
        _type: "link",
        title: "Try the AI demo",
        href: "/ai-demo",
        target: false,
        isExternal: false,
        buttonVariant: "secondary",
      },
    },
  ];

  it("renders pricing tiers with badges, pricing, and CTA buttons", () => {
    render(
      <PricingRow
        _type="pricing-row"
        _key="pricing-row"
        padding={null}
        colorVariant={null}
        eyebrow="Pricing"
        title="Concept pricing for this demo"
        description="Illustrative plans used to show CMS-managed pricing blocks."
        footnote="Pricing and enterprise features are concept content managed through Sanity CMS for portfolio demonstration."
        highlightedTier={{ _id: "team" } as any}
        tiers={tiers as any}
      />
    );

    expect(
      screen.getByRole("heading", { level: 2, name: /Concept pricing/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: /Starter/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Try the AI demo/i })
    ).toHaveLength(2);

    expect(
      screen.getByRole("heading", { level: 3, name: /Team/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/concept content managed through Sanity CMS/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Concept pricing shown for portfolio demonstration/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Coming soon/i)).toBeInTheDocument();
  });
});

