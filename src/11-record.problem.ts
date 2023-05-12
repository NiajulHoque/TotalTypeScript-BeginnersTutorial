import { expect, it } from "vitest";

/*
  This is called an index signature - we use this when we don't know what the names of the properties of an object will be initially, but we know the type
  of the values of those properties.

  So in our type Params, we are assigning dynamic keys to an object, we will assign it to the cache variable, and the values will be of type string.

  You could also use union types if the values will have different types.

  Another way we could have achieved this is by writing the following code which is more simple: const cache: Record<string, string> = {} - we wouldn't need to create a 
  for this.
*/

type Params = {
  [key: string]: string;
};

const createCache = () => {
  const cache: Params = {};

  // This is another way of creating dynamic keys for an object
  const cache2: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
