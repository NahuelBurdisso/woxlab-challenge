import React from 'react';
import styles from './index.module.css';
import { addVersion } from '../api';
import { sortFiles } from '../utils/sortFiles';

export default function FileItem(props) {
    const { file, filesSortedAsc, setFiles  } = props;
  
    const onRename = () => {
      const newName = window.prompt('Rename this file');
      if (newName) {
        addVersion(file.id, newName).then(filesResponse => {
          const sortedFiles = sortFiles(filesResponse, filesSortedAsc);
          setFiles(sortedFiles);
        });
      }
    }
  
    return (
      <div className={styles.file} data-testid={file.id}>
        <strong>{file.versions[0].name}</strong>
        <button onClick={onRename}>Rename</button>
        <ul>
          { file.versions.map(version => (
            <li key={version.id}>
              { version.name }
            </li>
          )) }
        </ul>
      </div>
    );
  }