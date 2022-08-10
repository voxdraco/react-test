import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TriangleBoxes from './triangleBoxes';

export default function PortalModal({
  styleName = '',
  text = 'Aon Portal',
}: {
  styleName?: string;
  text?: string;
}) {
  const [showingModal, showModal] = useState<boolean>(false);

  const modalRef = useRef(null);

  const useOutsideAlerter = ref => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          showModal(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(modalRef);

  const modal =
    globalThis.document && document.getElementById('modal')
      ? ReactDOM.createPortal(
          <div className="portal-modal">
            <div ref={modalRef} className="portal-modal__content" tabIndex={0}>
              <TriangleBoxes
                boxes={[
                  {
                    headingText: 'For members logged into the GS network',
                    descriptionText: '',
                    linkUrl: 'https://id.web.gs.com/gs-sso/aonpensionemployee',
                    linkText: 'Visit the internal portal',
                    name: 'internal-portal',
                    isDoubleBox: true,
                  },
                  {
                    headingText: 'For members not logged into the GS network',
                    descriptionText: '',
                    linkUrl: 'https://www.mypensionline.com/goldmansachs/',
                    linkText: 'Visit the external portal',
                    name: 'external-portal',
                    isDoubleBox: true,
                  },
                ]}
                noMargin
              />
            </div>
          </div>,
          document.getElementById('modal')
        )
      : null;

  return (
    <>
      <button
        className={`portal-modal__button standard-link ${styleName} `}
        onClick={() => showModal(true)}
      >
        {text}
      </button>
      {showingModal && modal}
    </>
  );
}
