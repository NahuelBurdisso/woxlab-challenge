// Sorts files by asc and returns the files sorted with an the way they were sorted
export const sortFiles = (files, asc) => {
    const sortedFiles = [].concat(files);
    if (asc) {
      sortedFiles.sort((a, b) => a.versions[0].name.localeCompare(b.versions[0].name));
    } else {
      sortedFiles.sort((a, b) => b.versions[0].name.localeCompare(a.versions[0].name));
    }
    return sortedFiles;
  }