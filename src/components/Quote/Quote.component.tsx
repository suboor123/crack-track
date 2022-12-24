import React, { useState } from 'react'
import { Quotes } from '../../library/quotes/quotes';

interface Props {
    multiple?: boolean
}
export default function Quote(props: Props) {
    const [quote, setQuote] = useState("");
    const [multipleQuotes, setMultipleQuotes] = useState([])

    React.useEffect(() => {
        const getQuote = async () => {
            if (props.multiple) {
                const quotes = await Quotes.generateMultiple()
                setMultipleQuotes(quotes as any)
            } else {
                const quoteText = await Quotes.generate()
                setQuote(quoteText as any)
            }
        }
        getQuote()
    }, [])


    React.useEffect(() => {

    }, [multipleQuotes.length]);


    const _quote = () => {
        let count = 0;
        setInterval(() => {
            if (count === multipleQuotes.length - 1) {
                count = 0
            }
            setQuote(multipleQuotes[count]);
            count++;
        }, 2000)
    }


    return (
        <>
            {quote}
        </>
    )
}
