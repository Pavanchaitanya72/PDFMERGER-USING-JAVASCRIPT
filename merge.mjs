import PDFMerger from 'pdf-merger-js';

const mergePdfs = async (p1,p2) => {
  var merger = new PDFMerger();
  await merger.add(p1);
  await merger.add(p2);//merge all pages. parameter is the path to file and filename.
   // merge only page 2
  
  
  await merger.save('./public/merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

export {mergePdfs};