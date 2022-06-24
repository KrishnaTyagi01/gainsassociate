import qs from "qs";
import pick from "lodash/fp/pick";
import identity from "lodash/fp/identity";

const getShareOptions = ({ url, text }, picker = identity) =>
  qs.stringify(
    picker({
      url: `https://www.gains-associates.com${url}`,
      text,
      title: text,
      u: `https://www.gains-associates.com${url}`,
      t: text,
    })
  );

export const getTelegramUrl = (options) =>
  `https://telegram.me/share/url?${getShareOptions(options)}`;

export const getTwitterUrl = (options) =>
  `https://twitter.com/intent/tweet?${getShareOptions({
    ...options,
    text: `${options.text} by @GainsAssociates`,
  })}`;

export const getRedditUrl = (options) =>
  `https://www.reddit.com/submit?${getShareOptions(options)}`;

export const getLinkedinUrl = (options) =>
  `https://www.linkedin.com/shareArticle?${getShareOptions(options)}`;

export const getFbUrl = (options) =>
  `https://www.facebook.com/sharer/sharer.php?${getShareOptions(
    options,
    pick(["u", "text"])
  )}`;
