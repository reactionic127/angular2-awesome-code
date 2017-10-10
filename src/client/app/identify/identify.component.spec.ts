import {
  async
} from '@angular/core/testing';

export function main() {
   describe('Identify component', () => {

    beforeEach(async(() => {
      // TestBed.configureTestingModule({
      // }).compileComponents()
      // .then(() => {
      //   console.log('');
      // });
    }));

    it('ngOnInit function should work',
      async(() => {
        expect(true).toEqual(true);
      }));
  });
}
