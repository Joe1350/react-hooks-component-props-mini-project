import React from "react";

console.log(Math.ceil(47 / 10))

function emoji({minutes}) {
    if (minutes < 30) {
        let emojiArray = []
        for (let i = 0; i < Math.ceil(minutes / 5); i++) {
            emojiArray.push('☕️')
        }
        return emojiArray.join('')
    } else {
        let emojiArray = []
        for (let i = 0; i < Math.ceil(minutes / 10); i++) {
            emojiArray.push('🍱')
        }
        return emojiArray.join('')
    }
}

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {emoji({minutes})} {minutes} minutes</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
