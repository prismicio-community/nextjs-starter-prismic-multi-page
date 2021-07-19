import React from 'react'
import { RichText } from 'prismic-reactjs'

const QuoteSlice = ({ slice }) => (
  <section className="container quote">
    <blockquote>
      {RichText.asText(slice.primary.quotetext)}
    </blockquote>
    { slice.variation === 'quoteReference' ? 
      <div>
        <cite>
          <RichText render={slice.primary.reference}/>
        </cite>
      </div>
      : null
    }
    <style jsx>{`
      .quote blockquote {
        display: block;
        font-family: 'Lora', Serif; 
        font-size: 36px;
        font-style: italic;
        font-weight: normal; 
        color: #484D52; 
        letter-spacing : 1.14;
        line-height: 1.5em;
        text-align: center;
      }
      .quote blockquote:before,
      .quote blockquote:after {
        color: #e9e9e9;
        content: open-quote;
        font-family: 'Lora', Serif;
        font-size: 2.5em;
        font-weight: 900;
        line-height: 0.1em;
        margin-left: 10px;
        margin-right: 10px;
        vertical-align: -0.3em;
      }
      .quote blockquote:after {
        content: close-quote;
      }
      .quote div {
        width: 300px;
        float: right;
        margin: -36px 0px 0px 0px;
      }
      .quote div cite {
        display: flex;
        line-height: 18px;
      }
      .quote div cite:before {
        content: '-';
        margin: 16px 4px 0px 0px;
      }
      @media (max-width: 767px) {
        .quote {
          font-size: 20px;
        }
      }
    `}</style>
  </section>
)

export default QuoteSlice
