// To test the `MovieInfo` component and the `generateStaticParams` function, you can use the Jest testing framework along with the `@testing-library/react` library. First, make sure you have installed the necessary testing libraries:

// ```bash
// npm install jest @testing-library/react @testing-library/jest-dom --save-dev
// ```

// Next, create a test file, for example, `MovieInfo.test.js`, and add the test functions:

// --- code

import { render, screen } from '@testing-library/react';
import MovieInfo, { generateStaticParams } from './page';

describe('MovieInfo Component', () => {
  test('renders movie information correctly', async () => {
    // Mock the fetch API to return some test data
    const mockData = {
      title: 'Test Movie',
      release_date: '2023-07-04',
      runtime: 120,
      status: 'Released',
      backdrop_path: '/test-image.jpg',
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    // Render the component
    render(<MovieInfo params={{ movie: '12345' }} />);

    // Assertions
    expect(await screen.findByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.release_date)).toBeInTheDocument();
    expect(screen.getByText(`Runtime: ${mockData.runtime} minutes`)).toBeInTheDocument();
    expect(screen.getByText(mockData.status)).toBeInTheDocument();

    // Clean up the mock
    global.fetch.mockRestore();
  });
});

describe('generateStaticParams function', () => {
  test('returns an array of movie params', async () => {
    // Mock the fetch API to return some test data
    const mockData = {
      results: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ],
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    // Call the function
    const params = await generateStaticParams();

    // Assertions
    expect(params).toHaveLength(3);
    expect(params[0].params.movie).toBe('1');
    expect(params[1].params.movie).toBe('2');
    expect(params[2].params.movie).toBe('3');

    // Clean up the mock
    global.fetch.mockRestore();
  });
});

// --- end code

// These test functions will check if the `MovieInfo` component renders the movie information correctly and if the `generateStaticParams` function returns the expected array of movie parameters. Note that we used `jest.spyOn` to mock the `fetch` function to return our test data, and `screen.findByText` is used to wait for the asynchronous content to be available in the DOM.