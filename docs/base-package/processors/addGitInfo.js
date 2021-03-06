module.exports = function addGitInfo(customDocs) {
  const InfoServiceDoc = customDocs.getDoc('InfoServiceDoc');

  return {
    name: 'copySite',
    $runAfter: ['routes-added'],
    $runBefore: ['extra-docs-added'],
    $process(docs) {
      docs.push(new InfoServiceDoc());
    },
  };
};
