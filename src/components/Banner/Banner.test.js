import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Banner } from './Banner';

describe('Banner tests', () => {
  test('Render btn test', () => {
    render(<Banner />);
    const btn = screen.getByTestId('banner-btn');
    expect(btn).toBeInTheDocument();
  });

  test('Select plan and click btn test', () => {
    render(<Banner />);
    const widgets = screen.getAllByTestId('widget');
    fireEvent.click(widgets[1]);
    const btn = screen.getByTestId('banner-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
