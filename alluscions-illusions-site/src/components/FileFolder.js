import React, { useState } from 'react';
import Bio from './Bio';
import Studio from './Studio';
import News from './News';

function FileFolder() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="folder">
      <div className="tabs">
        {['About Me', 'Studio', 'News'].map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="contents">
        {[<Bio />, <Studio />, <News />].map(
          (content, index) => (
            <div
              key={index}
              className={`content ${activeTab === index ? 'active' : ''}`}
            >
              {content}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FileFolder;