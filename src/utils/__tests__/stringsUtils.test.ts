import {stringsUtils} from '@utils';

describe('stringsUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringsUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringsUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringsUtils.capitalizeFirstLetter('maria')).toBe('Maria');
      expect(stringsUtils.capitalizeFirstLetter('MARIA')).toBe('Maria');
      expect(stringsUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringsUtils.capitalizeFirstLetter(' Ana maria')).toBe(
        'Ana Maria',
      );
      expect(stringsUtils.capitalizeFirstLetter('Ana maria ')).toBe(
        'Ana Maria',
      );
    });
  });
});
