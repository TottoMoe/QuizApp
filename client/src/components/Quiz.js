import React from 'react';
import Questions from './Questions';

export default function Quiz() {

  /** Prev button event handler */
  function onPrev() {
    console.log('On Prev Click')
  }

  /** Next button event handler */
  function onNext() {
    console.log('On Next Click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* Quiz Questions */}
      <Questions></Questions>

      {/* Navigation Buttons */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
