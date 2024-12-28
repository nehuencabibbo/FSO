/* eslint-disable react/jsx-key */
const Content = (props) => {
    return (
        <>
            {
                props.parts.map((partObject) => (
                    <p>
                        {partObject.part} {partObject.exercices}
                    </p>
                ))
            }
        </>
    )
}

export default Content