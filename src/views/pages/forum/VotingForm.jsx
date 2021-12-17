import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const VotingForm = ({title, description, date, file}) => {
  const [options, setOptions] = useState([{content: ''}]);

  const handleClickAddOption = () => {
    setOptions([...options, {content: ''}]);
  };

  const handleRemoveOption = (index) => {
    if (index === 0) {
      alert('Least option is 1');
      return;
    }
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="form-row create-post-voting">
      <div className="col-sm">
        <div className="form-group">
          <p className="mb-2">Option</p>
          <ul>
            {options.length !== 0 &&
              options.map((item, idx) => {
                return (
                  <li className="mb-2 d-flex gap-3 items-center" key={idx}>
                    <input
                      type="text"
                      className="form-control w-100"
                      name="reply-name"
                      placeholder={`Option ${idx + 1}`}
                      value={item.content}
                      onChange={(e) => handleInputVote(idx, e.target.value)}
                    />
                    <button
                      className="btn close-icon-wrapper"
                      onClick={() => handleRemoveOption(idx)}>
                      <i className="ri-close-fill"></i>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        <button className="btn btn-add w-100" onClick={() => handleClickAddOption()}>
          <i className="ri-add-circle-fill mr-2"></i>
          Add an option
        </button>
        <button className="btn btn-primary mt-20" onClick={() => handlePost()}>
                  Post a voting
        </button>
      </div>
    </div>
  );
};

export default VotingForm;
