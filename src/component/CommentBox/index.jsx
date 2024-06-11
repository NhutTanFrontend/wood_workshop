import { useEffect } from 'react';

const CommentBox = ({ url }) => {
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
    <div
      className="fb-comments mt-10 w-full"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    ></div>
  );
};

export default CommentBox;

