import React, { useState } from 'react';

import Hero from 'components/pages/pricing/hero-with-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import FAQ from 'components/shared/faq';
import SEO from 'components/shared/seo';
import Subscribe from 'components/shared/subscribe';

import Layout from '../components/shared/layout';

const INITIAL_SLIDER_VALUE = 20;

const findActiveTier = (value) => {
  if (value >= 150) {
    return 'enterprise';
  }
  if (value <= 60) return 'indie';
  return 'business';
};

const PRICING_PLANS = {
  cloud: { title: 'Cloud', value: 'cloud' },
  'self-hosted': { title: 'Self-hosted', value: 'self-hosted' },
};

const PricingPage = () => {
  const [pricingPlan, setPricingPlan] = useState(PRICING_PLANS.cloud.value);
  const [activeTier, setActiveTier] = useState(findActiveTier(INITIAL_SLIDER_VALUE));

  return (
    <Layout>
      <Hero
        activeTier={activeTier}
        setActiveTier={setActiveTier}
        findActiveTier={findActiveTier}
        pricingPlan={pricingPlan}
        setPricingPlan={setPricingPlan}
        pricingPlansData={PRICING_PLANS}
      />
      <PricingTable activeTier={activeTier} pricingPlan={pricingPlan} />
      <FAQ />
      <Subscribe />
    </Layout>
  );
};

export default PricingPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/pricing',
    title: 'Pricing',
    description: 'Pricing Plans',
  };
  return <SEO {...pageMetadata} />;
};
