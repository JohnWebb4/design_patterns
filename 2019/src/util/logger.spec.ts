import 'jest';

import { logger } from './logger';

describe('logger', () => {
  let baseLog: () => void;

  beforeEach(() => {
    baseLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = baseLog;
    jest.resetAllMocks();
  });

  describe('when logger logs a message', () => {
    it('should console log', () => {
      logger.log('Hello', 'There', { test: 'Something'});
      
      expect(console.log).toHaveBeenCalledWith('Hello', 'There', { test: 'Something' });
    });
  });
});