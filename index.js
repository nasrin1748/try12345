async function main() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  //await pyodide.loadPackage("pandas");
  const micropip = pyodide.pyimport("micropip");
  await pyodide.loadPackage("opencv-python");
  await micropip.install("opencv-python");
  await micropip.install("ipython");
  await pyodide.loadPackage("ipython");
  await pyodide.loadPackage(
  "./lib/PuLP-2.7.0-py3-none-any.whl"
  );
  //await micropip.install("pulp");
  let pythonCode =await (await fetch("main.py")).text()
  // Pyodide is now ready to use...
  console.log(
  pyodide.runPython(pythonCode)
  );
};
main();