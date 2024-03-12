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
                <button onClick={() => addReaction('resonates')}> ❣️ </button>
                <button onClick={() => removeReaction('resonates')}> 💔 </button>
                Resonates: {reactions.resonates}
            </div>
            <div>
                <button onClick={() => addReaction('felt')}> 🥺 </button>
                <button onClick={() => removeReaction('felt')}> 🤔 </button>
                Felt: {reactions.felt}
            </div>
            <div>
                <button onClick={() => addReaction('upset')}> 😒 </button>
                <button onClick={() => removeReaction('upset')}> 🙄 </button>
                Upset: {reactions.upset}
            </div>
        </div>
    )
}

export default Reactions