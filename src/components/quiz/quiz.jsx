import React, { useState } from 'react'

import './style.css'

const Quiz = (props) => {
	const [selected, setSelected] = useState('')
	const [submitted, setSubmitted] = useState(false)
	let firstClass
	let secondClass
	let thirdClass
	if (props.correct === 'first') {
		firstClass = 'correct'
	} else {
		firstClass = 'wrong'
	}
	if (props.correct === 'second') {
		secondClass = 'correct'
	} else {
		secondClass = 'wrong'
	}
	if (props.correct === 'third') {
		thirdClass = 'correct'
	} else {
		thirdClass = 'wrong'
	}
	return (
		<div>
			<div className={`signup-input ${!submitted ? null : firstClass}`}>
				<input
					type='radio'
					name='first'
					onChange={(e) => setSelected(e.target.value)}
					value='first'
					checked={selected === 'first' ? true : false}
				/>{' '}
				{props.first}
			</div>
			<div className={`signup-input ${!submitted ? null : secondClass}`}>
				<input
					type='radio'
					name='first'
					onChange={(e) => setSelected(e.target.value)}
					value='second'
					checked={selected === 'second' ? true : false}
				/>{' '}
				{props.second}
			</div>
			<div className={`signup-input ${!submitted ? null : thirdClass}`}>
				<input
					type='radio'
					name='first'
					onChange={(e) => setSelected(e.target.value)}
					value='third'
					checked={selected === 'third' ? true : false}
				/>{' '}
				{props.third}
			</div>
			<button className='sign-up-button' onClick={() => setSubmitted(true)}>
				Submit
			</button>
		</div>
	)
}

export default Quiz
