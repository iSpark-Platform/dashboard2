import React from 'react';

const SingleFaq = ({show=false,id,title,desc,parent='accordion'}) => {
    return (
        <div className="accordion-item">
            <h5 className="accordion-header">
                <button className={`accordion-button ${show?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#question-${id}`} aria-expanded={show?'true':'false'}>
                    {title}
                </button>
            </h5>
            <div id={`question-${id}`} className={`accordion-collapse collapse ${show?'show':''}`} data-bs-parent={`#faq-${parent}`}>
                <div className="accordion-body">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleFaq;