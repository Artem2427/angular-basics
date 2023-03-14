import { AppCounterService } from './services/app-counter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyValidators } from './my.validators';

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
export class AppComponent implements OnInit {
  // title = 'angular-basic';
  // inputValue = '';
  // toggle = false;
  // arr = [1, 1, 2, 3, 5, 8];
  isVisible = true;
  search = '';
  searchField: 'title' | 'text' = 'title';
  posts: Post[] = [
    {
      title: 'I want to learn Angular Components',
      text: 'I am still learning Angular Components',
      id: 1,
    },
    {
      title: 'He wants to learn Angular Components',
      text: 'He am still learning Angular Components ',
      id: 2,
    },
    {
      title: 'Javascript',
      text: 'The best language in the world',
      id: 3,
    },
  ];

  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float: number = 0.42;

  promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello Angular');
    }, 3000);
  });

  date$: Observable<Date> = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  date2: Date;

  // ngOnInit(): void {
  //   this.date$.subscribe({
  //     next: (date) => {
  //       this.date2 = date;
  //     },
  //   });
  // }

  obj = {
    a: 4,
    b: {
      c: 5,
      f: 6,
    },
  };

  constructor(public appCounterService: AppCounterService) {
    // setInterval(() => {
    //   this.date = new Date();
    // }, 1000);
  }

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

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required, MyValidators.restrictedEmails],
        Validators.composeAsync([MyValidators.uniqEmail] as AsyncValidatorFn[])
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    console.log(this.form, 'form');

    const formData = { ...this.form.value };
    console.log('Form Data:', formData);
    this.form.reset();
  }

  setCapital() {
    const cityMap = {
      ru: 'Москов',
      ua: 'Киев',
      by: 'Минск',
    };

    const key = this.form.get('address')?.get('country')
      ?.value as keyof typeof cityMap;
    const city = cityMap[key];

    this.form.patchValue({ address: { city } });
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // <FormArray>this.form.get('skills')?.push(control);
    (this.form.get('skills') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  appState = 'on';

  handleChange() {
    console.log(this.appState);
  }
}
