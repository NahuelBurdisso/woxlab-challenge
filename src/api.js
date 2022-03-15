export const files = [
  {
    id: 'the-file-id-1',
    versions: [
      { id: 1, name: 'test.txt' },
      { id: 0, name: 'test.txt' },
    ],
  },
  {
    id: 'the-file-id-2',
    versions: [
      { id: 1, name: 'recipes.doc' },
      { id: 0, name: 'recipes.doc' },
    ],
  },
  {
    id: 'the-file-id-3',
    versions: [
      { id: 1, name: 'picture.png' },
      { id: 0, name: 'photo.png' },
    ],
  },
];

export async function getFiles() {
  return files;
}

export async function addFile(fileName) {
  // This id creation is quite messy, the best option would be to use unique ids, libraries such as uuid might be useful
  const newFile = {
    id: `the-file-id-${files.length + 1}`,
    versions: [
      { id: 0, name: fileName}
    ]
  };
  files.push(newFile);
  return files;
}

export async function addVersion(fileId, name) {
  const file = files.find(f => f.id === fileId);
  const versionId = file.versions[0].id + 1;
  file.versions = [{id: versionId, name}, ...file.versions]; 
  return files;
}
