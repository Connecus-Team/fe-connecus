const FundingForm = ({totalFunding, setTotalFunding, interest, setInterest}) => {
  return (
    <div className="create-post-funding">
      <div className="col-sm">
        <div className="form-group">
          <p className="mb-2">Interest</p>
          <div className="mb-20">
            <textarea
              name="reply-message"
              rows={4}
              className="form-control"
              placeholder="Interest"
              value={interest}
              defaultValue={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <p className="mb-2">Total Funding</p>
          <div>
            <input
              type="number"
              className="form-control"
              name="funding-number"
              placeholder="Total funding $"
              onChange={(e) => setTotalFunding(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingForm;
