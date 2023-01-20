import React, { useEffect, useState, useRef } from 'react'
import { BiPlus } from "react-icons/bi";

const Faq = () => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const change = () => {
    setActive(!active);
  };
  return (
        <div className="App">
           <h2 className='faq-h2'>FAQ</h2>
        <div className='accordian'>
          <button
            className={`question-section ${active}`}
            onClick={change}>
            <div>
              <div className="topic-div">
                <h4 className="topic">
                  When will my order arrive?
                </h4>
                <BiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer1 answer-divider` : `answer1`}>
                <p className='ans'>Most shoes will be delivered between 3-5 business days</p>
              </div>
            </div>
          </button>
        </div>
      </div>
  )
}

export default Faq