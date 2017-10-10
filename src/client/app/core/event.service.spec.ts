import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { EventService } from './event.service';

export function main() {
  describe('Event service', () => {
    let eventService: EventService = null;
    let data = {
      helpIcon: 'http://helpIcon.png',
      helpStatus: true
    };

    beforeEach(async(() => {

      TestBed.configureTestingModule({
        providers: [
          EventService
        ]
      }).compileComponents();
    }));

    beforeEach(inject([EventService], (eventS: EventService) => {
      eventService = eventS;
    }));

    it('emit function should work',
      async(() => {
        spyOn((<any>eventService).subject, 'next');
        eventService.emit('test', data);
        expect((<any>eventService).subject.next).toHaveBeenCalled();
      }));

    it('registerEvent function should work',
      async(() => {
        eventService.registerEvent('test', null, (args: any) => {
          console.log('test event is registered');
        });
        expect((<any>eventService).listeners['test']).toBeDefined();
      }));

    it('unregisterEvent function should work',
      async(() => {
        eventService.unregisterEvent('test', null);
        expect((<any>eventService).listeners['test']).toBeUndefined();
      }));
  });
}
