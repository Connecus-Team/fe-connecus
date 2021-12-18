import React, {useRef} from 'react';

function VotingItem({item, setSelectVote}) {
  const inputRef = useRef();
  return (
    <li className="d-flex align-items-center gap-2 mb-2">
      <input
        ref={inputRef}
        type="radio"
        name="voting"
        value={item.id}
        className="form-check-input mb-1"
        onChange={() => setSelectVote(item.id)}
      />
      <span
        className="bg-light flex-grow-1 px-3 py-2 rounded-pill"
        onClick={() => inputRef.current.click()}>
        {item.content}
      </span>
    </li>
  );
}

export default VotingItem;
