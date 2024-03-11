import React, { useState } from "react"

function Reactions() {
    const [reactions,setReactions] = useState({
        resonates: 0,
        felt: 0,
        upset: 0
    })

    const addReaction = (reaction) => {
        setReactions(prevReactions => ({
            ...prevReactions, [reaction]: prevReactions[reaction] +1
        }))
    }

    const removeReaction = (reaction) => {
        if (reactions[reaction] > 0) {
            setReactions(prevReactions => ({
                ...prevReactions, [reaction]: prevReactions[reaction] -1
            }))
        }
    }

    return (
        <div className="reactions">
            <div>
                <button onClick={() => addReaction('resonates')}> Resonates </button>
                <button onClick={() => removeReaction('resonates')}> Unresonate </button>
                Resonates: {reactions.resonates}
            </div>
            <div>
                <button onClick={() => addReaction('felt')}> Felt </button>
                <button onClick={() => removeReaction('felt')}> Unfelt </button>
                Felt: {reactions.felt}
            </div>
            <div>
                <button onClick={() => addReaction('upset')}> Upset </button>
                <button onClick={() => removeReaction('upset')}> Unupset </button>
                Upset: {reactions.upset}
            </div>
        </div>
    )
}

export default Reactions