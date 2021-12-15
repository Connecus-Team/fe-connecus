import React from 'react';

export default function ConnecusExplan()
{
  const sectionInfos = [
    {className: 'what', icon: 'ri-question-fill', title: 'What is Ceus?'},
    {className: 'how', icon: 'ri-rocket-2-fill', title: 'How does Ceus works?'},
    {className: 'why', icon: 'ri-service-fill', title: 'Why must be Ceus?'}];
  return (
    <div className="connecus-explain" >
      {sectionInfos.map(({className, icon, title}, index) =>
        <section className={className} key={index}>
          <span className="icon-wrapper-1">
            <span className="icon-wrapper-2">
              <i className={icon}></i>
            </span>
          </span>
          <div className="divider"></div>
          <div className="content">
            <h3 className="mb-4">{title}</h3>
            <p>One of the greatest things about Las Vegas, Reno and Atlantic City (but especially Las Vegas) is the number of shoerry Seinfeld, Ray Romano, Tim Allen  </p>
          </div>
        </section>,
      )}
    </div>
  );
}
