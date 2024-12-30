import { useState } from "react";
import Statistics from "./Statistics";
import Feedback from "./Feedback";

function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  // Para que no se cree en cada render se puede usar useCallback
  const handleGoodReview = () =>
    setReviews({ ...reviews, good: reviews.good + 1 });
  const handleNeutralReview = () =>
    setReviews({ ...reviews, neutral: reviews.neutral + 1 });
  const handleBadReview = () =>
    setReviews({ ...reviews, bad: reviews.bad + 1 });

  return (
    <>
      <h1>Unicafe</h1>
      <Feedback
        handleBadReview={handleBadReview}
        handleNeutralReview={handleNeutralReview}
        handleGoodReview={handleGoodReview}
      />
      <Statistics reviews={reviews} />
    </>
  );
}

export default App;
