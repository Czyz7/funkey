import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accessible Web Designs</title>
        {/* ... other meta tags */}
      </Head>
      <HeroSection />
      {/* ... other sections (Services, Portfolio, etc.) */}
    </div>
  );
}