function buildDocId(userId, title) {
  // deterministic _id from user + title
  // normalize: lowercase, replace spaces, encode
  return encodeURIComponent(`${userId}::${title.toLowerCase().trim()}`);
}

module.exports = { buildDocId };
