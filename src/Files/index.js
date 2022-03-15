import React, { useEffect, useState } from 'react';

import { getFiles, addFile } from '../api';

import FileItem from '../FileItem';

import { sortFiles } from '../utils/sortFiles';

export default function Files() {
  const [files, setFiles] = useState([]);
  const [filesSortedAsc, setFilesSortedAsc] = useState(false);

  useEffect(() => {
    getFiles().then(filesResponse => {
      const sortedFiles = sortFiles(filesResponse, true);
      setFiles(sortedFiles);
      setFilesSortedAsc(true);
    });
  }, []);
  
  /* 
  Req 2: The approach to achieve the update of the variable files when the list 
  is updated would be this one:
    useEffect(() => {
      setFiles(files);
    }, [files]);
  However I choose to update the file component with whatever comes back from the API
  this helped me avoid mutability issues and keep a consistent flow of the state and
  state update.
  */

  const handleSortFilesClick = () => {
    const sortedFiles = sortFiles(files, !filesSortedAsc);
    setFiles(sortedFiles);
    setFilesSortedAsc(!filesSortedAsc);
  }

  const handleAddFileClick = () => {
    const newFileName = window.prompt('New file name');
    if (newFileName) {
      addFile(newFileName).then(files => {
        const sortedFiles = sortFiles(files, filesSortedAsc);
        setFiles(sortedFiles);
      });
    }
  }

  return (
    <>
      <button onClick={handleSortFilesClick}>{filesSortedAsc ? 'Sort Z-A' : 'Sort A-Z'}</button>
      {files.length > 0 && files.map(file => <FileItem file={file} setFiles={setFiles} asc={filesSortedAsc} key={file.id} />) }
      <button onClick={handleAddFileClick}>Add file</button>
    </>
  );
}
