import { useEffect } from 'react';

const FacebookLikeShare = () => {
  useEffect(() => {
    // Load Facebook SDK for JavaScript
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement('script');
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div
        className="fb-like block mt-[11px]"
        data-href="https://www.yourwebsite.com"
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="false"
      ></div>

      <div
        className="fb-share-button block"
        data-href="https://www.yourwebsite.com"
        data-layout="button_count"
      ></div>
    </div>
  );
};

export default FacebookLikeShare;
