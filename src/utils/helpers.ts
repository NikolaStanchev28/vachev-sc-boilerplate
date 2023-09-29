import { NextRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { KeyOfType } from "types";
import { UrlObject } from "url";

/**
 * @returns  A random integer between min (inclusive) and max (inclusive)
 */
export const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Object.keys() fully typed alias
 */
export const objectKeys = Object.keys as <T extends object>(obj: T) => Array<KeyOfType<T>>;

/**
 * Shallow routing allows you to change the URL without running data fetching methods again, that includes getServerSideProps, getStaticProps, and getInitialProps.
 * You'll receive the updated pathname and the query via the router object (added by useRouter or withRouter), without losing state.
 * @param router Next.js router object added by useRouter or withRouter
 * @param pathname The path for current route file that comes after /pages
 * @param query Query string or object representing the query string to be replaced in the url
 *
 * @example shallowReplaceQuery(router, "/", "page=1&resultsPerPage=10");
 * @example shallowReplaceQuery(router, "/", { page: 1, resultsPerPage: 10 });
 */
export const shallowReplaceQuery = (
  router: NextRouter,
  pathname: UrlObject["pathname"],
  query?: string | null | ParsedUrlQueryInput | undefined
) => {
  router.replace(
    {
      pathname,
      query
    },
    undefined,
    { shallow: true }
  );
};

/**
 *
 * @param k object key
 * @param v object value
 * @returns the object with narrow index signature
 * @example kv("key", "value") // { key: "value" }
 * @see [Computed property key names should not be widened](https://github.com/microsoft/TypeScript/issues/13948)
 */
export const kv = <K extends PropertyKey, V>(k: K, v: V) =>
  ({ [k]: v } as { [P in K]: { [Q in P]: V } }[K]);

/**
 * @param px - number of pixels
 * @returns pixels converted to rem
 * @remarks Make sure edit this function to match the body's font size in src/styles/global.ts
 */
export const rem = (px: number) => `${px / 16}rem`;

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mbToBytes = (mb: number) => mb * 1024 * 1024;

export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  if (chunkSize <= 0) return [[]];

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
};
