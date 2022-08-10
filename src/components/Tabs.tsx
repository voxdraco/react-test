import React, { useState } from 'react';

interface TabProps {
  name: string;
  title: string;
  description?: string;
  content: React.ReactNode;
}

interface Props {
  tabs: TabProps[];
  currentTab: string;
  setCurrentTab: (tabName: string) => void;
}

const Tabs = ({ tabs, currentTab, setCurrentTab }: Props) => {
  const currentContent = tabs.find(x => x.name === currentTab).content;

  return (
    <div className="tabs__container">
      <div className="tabs__tabsection">
        {tabs.map(({ name, title, description }) => {
          const isCurrentTab = currentTab === name;
          return (
            <button
              key={name}
              data-name={name}
              className={`tabs__tab ${
                isCurrentTab ? 'tabs__tab--selected' : ''
              }`}
              onClick={() => setCurrentTab(name)}
            >
              <h4 className="tab__heading">{title}</h4>
              {description && (
                <div className="tab__description">{description}</div>
              )}
            </button>
          );
        })}
      </div>
      <div className="tabs__content">{currentContent}</div>
    </div>
  );
};

export default Tabs;
