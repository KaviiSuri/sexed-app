import React from 'react'

import Post from '../../components/post/post'
import Flame from '../../vectors/Flame.svg'
import './styles.css'

const Forum = () => {
	return (
		<div>
			<div className='forum-searchbox'>
				<input type='text' placeholder='Search for specialist' />
				<img src={Flame} alt='flame' />
			</div>
			<div className='forum-post-container'>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
			<div className='forum-button-div'>
				<button className='forum-new-post'>New Post</button>
			</div>
		</div>
	)
}

export default Forum
