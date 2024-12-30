const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Feedback = ({
  handleGoodReview,
  handleNeutralReview,
  handleBadReview,
}) => {
    return (
        <>
            <h2>give feedback</h2>
            <Button text={"good"} onClick={handleGoodReview}/>
            <Button text={"neutral"} onClick={handleNeutralReview}/>
            <Button text={"bad"} onClick={handleBadReview}/>
        </>
    )
}

export default Feedback;
