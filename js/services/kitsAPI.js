let kitsCache = null;

export async function getKits() {
  if (kitsCache) {
    return kitsCache;
  }

  const response = await fetch("./data/kits.json");
  const data = await response.json();
  kitsCache = data;

  return data;
}
