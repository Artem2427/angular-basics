import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    array: Post[],
    search: string = '',
    searchField: 'title' | 'text' = 'title'
  ): Post[] {
    if (search.trim().length === 0) {
      return array;
    }

    return array.filter((post) => {
      return post[searchField].toLowerCase().includes(search.toLowerCase());
    });
  }
}
