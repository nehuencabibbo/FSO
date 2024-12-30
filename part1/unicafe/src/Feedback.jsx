const Feedback = ({
  handleGoodReview,
  handleNeutralReview,
  handleBadReview,
}) => {
    return (
        <>
            <h2>give feedback</h2>
            <button onClick={handleGoodReview}>good</button>
            <button onClick={handleNeutralReview}>neutral</button>
            <button onClick={handleBadReview}>bad</button>
        </>
    )
}

export default Feedback;
