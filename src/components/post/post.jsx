import React from 'react'

import Upvote from '../../vectors/Upvote.svg'
import Comment from '../../vectors/comment.svg'
import PostPic from '../../vectors/postPic.svg'
import profile from '../../vectors/postCommenter.png'
import './styles.css'

const Post = (props) => {
	return (
		<div className='post-container'>
			<div className='left-section'>
				<img src={PostPic} alt='' />
				<img src={profile} alt='' />
			</div>
			<div className='right-section'>
				<div className='time-and-poster'>
					{props.timePoster || '1m ago by @anonymous'}
				</div>
				<div className='post-heading'>
					{props.heading || 'Abdominal pain and discomfort'}
				</div>
				<div className='post-content'>
					{props.content ||
						'I (18F) masturbated 3 days ago. Since then, I felt mild discomfort on my lower abdomen. Now past 3 days and... '}
					<div className='see-more'>See more</div>
				</div>
				<div className='likes-and-comment'>
					<div>
						<img src={Upvote} alt='upvote' /> {props.upvote || '32'} Upvotes
					</div>
					<div>
						<img src={Comment} alt='upvote' /> {props.comment || '32'} comments
					</div>
				</div>
				<input
					type='text'
					placeholder='Leave a comment'
					className='comment-input'
				/>
			</div>
		</div>
	)
}

export default Post
