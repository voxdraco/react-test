import React, { useReducer, useState } from 'react';

interface ButtonProps {
  buttonText?: string;
  name: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClickOpen: () => void;
}

interface Content {
  name: string;
  buttonText?: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionsProps {
  accordions: Content[];
  openAccordionIndex: number | null;
  setOpenAccordionIndex: (index: number | null) => void;
}

const AcordionButton = ({
  buttonText,
  onClickOpen,
  name,
  icon,
  isOpen,
}: ButtonProps) => (
  <div className="col-sm-3 col-xs-3 mobile-half">
    <div className="explanations__item">
      <button
        className="explanations__opendetail"
        onClick={onClickOpen}
        data-name={`accordion__${name}`}
        type="button"
      >
        <div
          className={`explanations__icon ${
            isOpen ? 'explanations__icon--open' : ''
          }`}
        >
          {icon}
        </div>
      </button>
    </div>
  </div>
);

const Accordions = ({
  accordions,
  openAccordionIndex,
  setOpenAccordionIndex,
}: AccordionsProps) => {
  return (
    <div className="explanations__container">
      <div className="row around-sm explanations__buttons">
        {accordions.map(({ buttonText, name, icon: icon }, index) => (
          <AcordionButton
            icon={icon}
            name={name}
            key={index}
            isOpen={index === openAccordionIndex}
            buttonText={buttonText}
            onClickOpen={() => {
              console.log(index);
              console.log(openAccordionIndex);

              index === openAccordionIndex
                ? setOpenAccordionIndex(null)
                : setOpenAccordionIndex(index);
            }}
          />
        ))}
      </div>

      {openAccordionIndex !== null && (
        <div
          className="explanation__content"
          data-index={openAccordionIndex}
          data-name={
            'accordion-content__' + accordions[openAccordionIndex].name
          }
        >
          <button
            className="explanation__close"
            onClick={() => setOpenAccordionIndex(null)}
          >
            <svg className="explanation__cross" viewBox="-10 -10 20 20">
              <line
                x1="-10"
                y1="-10"
                x2="10"
                y2="10"
                strokeWidth="3"
                stroke="black"
              />
              <line
                x1="-10"
                y1="10"
                x2="10"
                y2="-10"
                strokeWidth="3"
                stroke="black"
              />
            </svg>
            <span>Close</span>
          </button>

          <div className="explanation__copy">
            <h3 data-name="explanation__header">
              {accordions[openAccordionIndex].buttonText}
            </h3>
            {accordions[openAccordionIndex].content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordions;
