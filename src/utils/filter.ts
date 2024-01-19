import { AuthorInterface } from '../interfaces/author';
import { BookInterface } from '../interfaces/book';

type SearchFieldFunction = (
  item: BookInterface | AuthorInterface,
  searchValue: string,
) => boolean;

export const searchField: SearchFieldFunction = (
  item,
  searchValue,
): boolean => {
  const values = Object.values(item);
  const normalizedSearchValue = searchValue?.toLowerCase();

  return values.some(
    (value: any) =>
      typeof value === 'string' &&
      value?.toLowerCase().includes(normalizedSearchValue),
  );
};

export function convertToCamelCase(value: string): string {
  const firstvalue = value.split(/(?=[A-Z])/)[0];
  const capitalizedFirstvalue =
    firstvalue.charAt(0).toUpperCase() + firstvalue.slice(1);

  if (/^[a-z][a-zA-Z]*$/.test(value)) {
    const camelCasePart = value
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .slice(firstvalue.length);
    return capitalizedFirstvalue + camelCasePart;
  } else {
    return capitalizedFirstvalue + value.slice(firstvalue.length);
  }
}
