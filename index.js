const io = requrie ('@actions/io');
const fs = require ('fs');

await io.mkdirP(outputDir);
saveIntermediateData (outputDir, email_list);

function saveIntermediateData (directory, data) {
  try {
    const file = path.join(directory, 'email_list.json');
    fs.writeFileSync (file, JSON.stringify (data));
  } catch (err) {
    console.error (Failed to save intermediate data: $ {err});
  }
}
