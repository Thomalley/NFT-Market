import WorldOfTopWorks from './components/WorldOfTopWorks.jsx';
import FeaturedItem from './components/FeaturedItem.jsx';
import DiscoverItem from './components/DiscoverItem.jsx';
import TopCollections from './components/TopCollections.jsx';
import StepByStep from './components/StepByStep.jsx';
import TopSeller from './components/TopSeller.jsx';
import TopCollectors from './components/TopCollectors.jsx';

export default function Home() {
  return (
    <div>
      <WorldOfTopWorks />
      <FeaturedItem />
      <TopSeller />
      <DiscoverItem />
      <TopCollectors />
      <TopCollections />
      <StepByStep />
    </div>
  );
}
