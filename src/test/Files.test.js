import React from 'react'
import { files } from '../api'
import { render, screen } from '@testing-library/react'
import Files from '../Files'

describe('Files component', () => {
    test('Initial render', async () => {
        await render(<Files/>);
        const firstFile = screen.getAllByText(files[0].versions[0].name);
        expect(firstFile).not.toBeNull();
    });

    test('Sort files', async () => {
        await render(<Files/>);
        const sortButton = screen.getByText('Sort Z-A');
        sortButton.click();
        const files = screen.getAllByTestId('the-file-id-', { exact: false });
        expect(files[0]).toHaveTextContent('test.txt');
    })
})