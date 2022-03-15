import React from 'react';

import { useFiles } from './use-files';
import { addVersion } from '../api';

import styles from './index.module.css';

// TODO: Improve the implementation of this component according to task (4)
function File({ file }) {

  const onRename = () => {
    const newName = window.prompt('Rename this file');
    addVersion(file.id, newName);
  }

  return (
    <div className={styles.file}>
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

export default function Files() {
  // TODO: Replace this polling-like implementation according to task (2)
  const [ state, setState ] = React.useState();
  setInterval(() => setState(Math.random()), 1000);

  const files = useFiles();
  return (
    <>
      {/* TODO: Implement sort feature according to task (3) */}
      <button>Sort A-Z/Z-A</button>
      {
        files.map(file => <File file={file} key={file.id} />)
      }
      {/* TODO: Add a button to add a new file according to task (5) */}
    </>
  );
}
