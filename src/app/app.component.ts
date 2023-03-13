import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'angular-basic';
  // inputValue = '';
  // toggle = false;
  // arr = [1, 1, 2, 3, 5, 8];
  posts: Post[] = [
    {
      title: 'I want to learn Angular Components',
      text: 'I am still learning Angular Components ',
      id: 1,
    },
    {
      title: 'He wants to learn Angular Components',
      text: 'He am still learning Angular Components ',
      id: 2,
    },
  ];

  updatePosts(post: Post) {
    console.log(post);
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  // onInput(event: KeyboardEvent) {
  //   if (event.key === 'Enter') {
  //     this.inputValue = (<HTMLInputElement>event.target).value;
  //   }
  // }

  // onBlur(str: string) {
  //   this.inputValue = str;
  // }

  // onClick() {
  //   console.log('Click');
  // }
}
