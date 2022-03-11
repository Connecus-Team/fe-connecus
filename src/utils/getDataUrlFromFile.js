export function getDataURLFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.onerror = function(e) {
      reject(e.target.error);
    };
    reader.readAsDataURL(file);
  });
}
