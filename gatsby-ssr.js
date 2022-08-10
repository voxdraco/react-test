import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents(
    <script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="05042344-e2e5-4af9-abc8-bb375089b6bd"
      data-blockingmode="auto"
      type="text/javascript"
    ></script>
  );
};
