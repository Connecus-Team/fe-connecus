import React, {useRef} from 'react';
import {defaultItem} from './PostItem';

function VotingItem(item = defaultItem) {
  const inputRef = useRef();
  const {item: post} = item;
  return (
    <li className="d-flex align-items-center gap-2 mb-2">
      <input
        ref={inputRef}
        type="radio"
        name="voting"
        value={post.id}
        className="form-check-input mb-1"
      />
      <span
        className="bg-light flex-grow-1 px-3 py-2 rounded-pill"
        onClick={() => inputRef.current.click()}>
        {post.content}
      </span>
    </li>
  );
}

export default VotingItem;
